/*
Express will serve static content from the public directory
*/

var cheerio, express, getWebsiteHtml, http, server;

express = require('express');

server = express();

http = require('http');

cheerio = require('cheerio');

server.use(express["static"](__dirname + '/public'));

server.get('/getFreeAppInfo', function(req, res) {
  return getWebsiteHtml('http://www.amazon.com/mobile-apps/b?ie=UTF8&node=2350149011', function(html) {
    var $, fullDescription, link, title;
    $ = cheerio(html);
    fullDescription = $.find('.fad-widget-footer-info').find('div').text();
    title = $.find('.fad-widget-footer-info').find('a').text();
    /*
    TODO: use this link to go to app site which has more precise selectors for price and all other info
    */

    link = 'http://www.amazon.com' + $.find('.fad-widget-footer-info').find('a').attr('href');
    return getWebsiteHtml(link, function(appHtml) {
      var imageSrc, listPrice, name, price, rated, reviews, youSave;
      $ = cheerio(appHtml);
      name = $.find('#btAsinTitle').text();
      price = $.find('#actualPriceValue').text();
      listPrice = $.find('#listPriceValue').text();
      youSave = $.find('#youSaveValue').text();
      rated = $.find('#mas-show-ratings').text();
      imageSrc = $.find('img#prodImage').attr('src');
      reviews = null;
      return res.json({
        name: name,
        price: price,
        listPrice: listPrice,
        youSave: youSave,
        rated: rated,
        reviews: reviews,
        imageSrc: imageSrc,
        link: link
      });
    });
  });
});

/*
Navigate to localhost:3000 to hit /public/index.html
*/


server.listen(process.env.PORT || 3000);

/*
Abstracting http get request
*/


getWebsiteHtml = function(url, callback, scope) {
  return http.get(url, function(urlResponse) {
    var html;
    urlResponse.setEncoding('utf8');
    html = '';
    urlResponse.on('data', function(chunk) {
      return html += chunk;
    });
    return urlResponse.on('end', function() {
      return callback.call(scope, html);
    });
  });
};
