express = require 'express'
server = express()
http = require 'http'
cheerio = require 'cheerio' 


###
Express will serve static content from the public directory
###
server.use express.static __dirname + '/public'

server.get '/getAppInfo', ( req, res ) ->
  http.get 'http://www.amazon.com/mobile-apps/b?ie=UTF8&node=2350149011', ( amazonResponse ) ->
    amazonResponse.setEncoding 'utf8'
    html = ''
    amazonResponse.on 'data', (chunk) ->
      html += chunk


    amazonResponse.on 'end', ->
      $ = cheerio html
      
      fullDescription = $.find('.fad-widget-footer-info').find('div').text()
      title = $.find('.fad-widget-footer-info').find('a').text()
      
      ###
      TODO: use this link to go to app site which has more precise selectors for price and all other info
      ###
      link = 'http://www.amazon.com' + $.find('.fad-widget-footer-info').find('a').attr('href')
      
      res.json 
        fullDescription: fullDescription
        title: title
        link: link

###
Navigate to localhost:3000 to hit /public/index.html
###
server.listen 3000