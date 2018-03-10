const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/rate', function(req, res) {
    getRate(req, res);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  // .get('/', (req, res) => res.send(mailform.html))
  // .get('/math', (req, res) => res.render('pages/math', req.query))

  function getRate(req, res) {
    var w = req.query.weight;
    var mail = req.query.mail;
    var cost = 0;
    var ow = false;

    if (mail == "Letters (Stamped)") {
      if (w > 3.5){
        cost = "Error: too heavy for mail type";
        ow = true;
      }
      else if (w <= 3.5 && w > 3)
        cost = 1.13;
      else if (w <= 3 && w > 2)
        cost = 0.92;
      else if (w <= 2 && w > 1)
        cost = 0.71;
      else if (w <= 1 && w >= 0)
        cost = 0.50;
    }
    else if (mail == "Letters (Metered)") {
      if (w > 3.5){
        cost = "Error: too heavy for mail type";
        ow = true;
      }
      else if (w <= 3.5 && w > 3)
        cost = 1.10;
      else if (w <= 3 && w > 2)
        cost = 0.89;
      else if (w <= 2 && w > 1)
        cost = 0.68;
      else if (w <= 1 && w >= 0)
        cost = 0.47;
    }
    else if (mail == "Large Envelopes (Flats)") {
      if (w > 13){
        cost = "Error: too heavy for mail type";
        ow = true;
      }
      else if (w <= 13 && w > 12)
        cost = 3.52;
      else if (w <= 12 && w > 11)
        cost = 3.31;
      else if (w <= 11 && w > 10)
        cost = 3.10;
      else if (w <= 10 && w > 9)
        cost = 2.89;
      else if (w <= 9 && w > 8)
        cost = 2.68;
      else if (w <= 8 && w > 7)
        cost = 2.47;
      else if (w <= 7 && w > 6)
        cost = 2.26;
      else if (w <= 6 && w > 5)
        cost = 2.05;
      else if (w <= 5 && w > 4)
        cost = 1.84;
      else if (w <= 4 && w > 3)
        cost = 1.63;
      else if (w <= 3 && w > 2)
        cost = 1.42;
      else if (w <= 2 && w > 1)
        cost = 1.21;
      else if (w <= 1 && w >= 0)
        cost = 1.00;
    }
    else if (mail == "First-Class Package Service-Retail") {
      if (w > 13) {
        cost = "Error: too heavy for mail type";
        ow = true;
      }
      else if (w <= 13 && w > 12)
        cost = 5.50;
      else if (w <= 12 && w > 11)
        cost = 5.15;
      else if (w <= 11 && w > 10)
        cost = 4.80;
      else if (w <= 10 && w > 9)
        cost = 4.45;
      else if (w <= 9 && w > 8)
        cost = 4.10;
      else if (w <= 8 && w > 7)
        cost = 3.75;
      else if (w <= 7 && w > 6)
        cost = 3.75;
      else if (w <= 6 && w > 5)
        cost = 3.75;
      else if (w <= 5 && w > 4)
        cost = 3.75;
      else if (w <= 4 && w > 3)
        cost = 3.50;
      else if (w <= 3 && w > 2)
        cost = 3.50;
      else if (w <= 2 && w > 1)
        cost = 3.50;
      else if (w <= 1 && w >= 0)
        cost = 3.50;
    }
    else 
      console.log("Error: no valid type chosen")
    
    var rateInfo = {weight: w, mail: mail, cost: cost, ow: ow};

    res.render('pages/rate', rateInfo);
  }