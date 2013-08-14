var cheerio, express, http, server;

express = require('express');

server = express();

http = require('http');

cheerio = require('cheerio');

/*
Express will serve static content from the public directory
*/


server.use(express["static"](__dirname + '/public'));

server.get('/getAppInfo', function(req, res) {
  return http.get('http://www.amazon.com/mobile-apps/b?ie=UTF8&node=2350149011', function(amazonResponse) {
    var html;
    amazonResponse.setEncoding('utf8');
    html = '';
    amazonResponse.on('data', function(chunk) {
      return html += chunk;
    });
    return amazonResponse.on('end', function() {
      var $, fullDescription, link, title;
      $ = cheerio(html);
      fullDescription = $.find('.fad-widget-footer-info').find('div').text();
      title = $.find('.fad-widget-footer-info').find('a').text();
      /*
      TODO: use this link to go to app site which has more precise selectors for price and all other info
      */

      link = 'http://www.amazon.com' + $.find('.fad-widget-footer-info').find('a').attr('href');
      return res.json({
        fullDescription: fullDescription,
        title: title,
        link: link
      });
    });
  });
});

/*
Navigate to localhost:3000 to hit /public/index.html
*/


server.listen(3000);
