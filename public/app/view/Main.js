Ext.define('Notifier.view.Main', {
    extend: 'Ext.Carousel', //TODO show free app of yesterday
    xtype: 'main',
    requires: [
        'Ext.form.Panel',
        'Ext.dataview.DataView',
        'Ext.data.Store',
        'Notifier.view.FreeAppInfoDataView'
    ],
    config: {
        tabBarPosition: 'bottom',
        defaults: {
            xtype: 'formpanel',
            styleHtmlContent: true,
            scrollable: true
        },
        items: [
            {
                xtype: 'freeAppInfoDataView'
            }//, //TODO: Free App of yesterday
//            {
//                xtype: 'freeAppInfoDataView'
//            }
        ]
    }
});