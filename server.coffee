express = require 'express'
server = express()
http = require 'http'
cheerio = require 'cheerio' 


###
Express will serve static content from the public directory
###
server.use express.static __dirname + '/public'

server.get '/getAppInfo', ( req, res ) ->
  getWebsiteHtml 'http://www.amazon.com/mobile-apps/b?ie=UTF8&node=2350149011', ( html ) ->
    $ = cheerio html

    fullDescription = $.find('.fad-widget-footer-info').find('div').text()
    title = $.find('.fad-widget-footer-info').find('a').text()

    ###
    TODO: use this link to go to app site which has more precise selectors for price and all other info
    ###
    link = 'http://www.amazon.com' + $.find('.fad-widget-footer-info').find('a').attr('href')
    
    getWebsiteHtml link, ( appHtml ) ->
      $ = cheerio appHtml
      
      name = $.find('#btAsinTitle').text()
      price = $.find('#actualPriceValue').text()
      listPrice = $.find('#listPriceValue').text()
      youSave = $.find('#youSaveValue').text()
      rated = $.find('#mas-show-ratings').text()
      imageSrc = $.find('img#prodImage').attr('src')
      #TODO: Get Reviews
      reviews = null
      
      res.json 
        name: name
        price: price
        listPrice: listPrice
        youSave: youSave
        rated: rated
        reviews: reviews
        imageSrc: imageSrc

###
Navigate to localhost:3000 to hit /public/index.html
###
server.listen 3000

###
Abstracting http get request
###
getWebsiteHtml = ( url, callback, scope ) ->
  http.get url, ( urlResponse ) ->
    urlResponse.setEncoding 'utf8'
    html = ''
    
    urlResponse.on 'data', (chunk) ->
      html += chunk


    urlResponse.on 'end', ->
      callback.call scope, html
