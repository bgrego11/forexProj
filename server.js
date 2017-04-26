var express = require("express");
var moment = require("moment");
var bodyParser = require("body-parser");
var oxr = require('open-exchange-rates'),
    fx = require('money');
oxr.set({ app_id: 'b3e3d3097383466fba640039d4f7ba4e' })



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));
//converts from any amt of ccy to another 
//to get 100 EUR to USD get localhost:8080/100/EUR/USD
app.get('/:amt/:sell/:buy',function(req,res){
        var amt = req.params.amt;
        var sell = req.params.sell;
        var buy = req.params.buy;
                oxr.latest(function() {
                // You can now use `oxr.rates`, `oxr.base` and `oxr.timestamp`
                fx.rates = oxr.rates;
                fx.base = oxr.base;
                
                res.json(fx(amt).from(sell).to(buy));
            });
            
 })

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  

  });