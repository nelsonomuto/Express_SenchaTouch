Ext.define('Notifier.model.FreeAppInfo', {
  extend: 'Ext.data.Model',
  config: {
    fields: ['name', 'price', 'listPrice', 'youSave', 'rated', 'reviews', 'imageSrc', 'link'],
    proxy: {
      type: 'ajax',
      url: 'FreeAppInfo'
    }
  }
});
