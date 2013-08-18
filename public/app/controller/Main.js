Ext.define('Notifier.controller.Main', {
  extend: 'Ext.app.Controller',
  requires: ['Ext.device.Notification'],
  init: function() {
    Ext.device.Notification.show({
      title: 'Verification',
      message: 'Testing Notification',
      buttons: Ext.MessageBox.OKCANCEL,
      callback: function(button) {
        if (button === "ok") {
          return console.log('Verified');
        } else {
          return console.log('Nope');
        }
      }
    });
    return Ext.device.Notification.vibrate();
  }
});
