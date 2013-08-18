Ext.define 'Notifier.controller.Main',
  
  extend: 'Ext.app.Controller'  
  
  requires: [
    'Ext.device.Notification'
  ]
  
  init: ->
#    Ext.device.Notification.show
#      title: 'Verification'
#      message: 'Testing Notification'
#      buttons: Ext.MessageBox.OKCANCEL
#      callback: (button) ->
#        if (button is "ok") 
#          console.log('Verified')
#        else 
#          console.log('Nope')
#          
#    Ext.device.Notification.vibrate()