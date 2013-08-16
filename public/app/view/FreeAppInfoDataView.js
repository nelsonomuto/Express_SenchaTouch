Ext.define('Notifier.view.FreeAppInfoDataView', {
  extend: 'Ext.dataview.DataView',
  alias: 'widget.freeAppInfoDataView',
  requires: ['Notifier.store.FreeAppInfo'],
  config: {
    store: 'freeAppInfoStore',
    itemTpl: "<h2>Free App of Today: </h2>\n<div id='appContent'> \n\n<p> \n<a class='label' href='{link}'>App Name: </span><span class='value'>{name}</a>\n</p>\n\n<p> \n<span class='label'>Price: </span><span class='value'>{price}</span>\n</p>\n\n<p> \n<span class='label'>List Price: </span><span class='value'>{listPrice}</span>\n</p>\n\n<p> \n<span class='label'>You Save: </span><span class='value'>{youSave}</span>\n</p>\n\n<p> \n<span class='label'>Rated: </span><span class='value'>{rated}</span>\n</p>\n\n<p> \n<span class='label'>Reviews: </span><span class='value'>{reviews}</span>\n</p>\n\n<a href='{link}'><img src='{imageSrc}' /></a>\n</div>"
  }
});
