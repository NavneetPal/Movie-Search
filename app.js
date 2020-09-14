const express = require("express");
const app = express();
const request = require("request");
const { response } = require("express");

app.set("view engine","ejs");


/*************/
//ROUTER
/************/
app.get("/", (req, res) => {
  res.render("search");
});

app.get("/results", (req, res) => {
  const query=req.query.search ;
  const url=   "http://www.omdbapi.com/?s="+query+"&apikey=2626649e";
  request(url,(error, response, body) => {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        //res.send(results.Search[0].Title);
        res.render('results',{data:data});
      }
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Movie App has started!!!!");
});
