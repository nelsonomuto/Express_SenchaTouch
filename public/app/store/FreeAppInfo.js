Ext.define('Notifier.store.FreeAppInfo', {
  extend: 'Ext.data.Store',
  requires: ['Notifier.model.FreeAppInfo'],
  config: {
    storeId: 'freeAppInfoStore',
    model: 'Notifier.model.FreeAppInfo',
    autoLoad: true,
    proxy: {
      type: 'ajax',
      url: '/getFreeAppInfo'
    }
  }
});
