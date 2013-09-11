Ext.define('Notifier.view.FreeAppInfoDataView', {
  extend: 'Ext.dataview.DataView',
  alias: 'widget.freeAppInfoDataView',
  requires: ['Notifier.store.FreeAppInfo'],
  config: {
    store: 'freeAppInfoStore',
	scrollable:false,
	               
    itemTpl: ["<div id='appContent'>"+
	"<table>"+
	" <tr>"+
        "<td><a href='{link}'><img  height='96' width='96' src='{imageSrc}' /></a></td>"+
        "<td><a class='label' href='{link}'></span><span class='value'>{name}</a></td>"+
    "</tr>"+
    "<tr>"+
        "<td><span class='label'>Price: </span></td>"+
        "<td><span class='value'>{price}</span></td>"+
    "</tr>"+
    "<tr>"+
        "<td><span class='label'>List Price: </span></td>"+
        "<td><span class='value'>{listPrice}</span></td>"+
    "</tr>"+
    "<tr>"+
        "<td><span class='label'>You Save: </span></td>"+
        "<td><span class='value'>{youSave}</span></td>"+
    "</tr>"+
	  "<tr>"+
        "<td><span class='label'>Rated: </span></td>"+
        "<td><span class='value'>{rated}</span></td>"+
    "</tr>"+
	  "<tr>"+
        "<td><span class='label'>Reviews: </span></td>"+
        "<td><span class='value'>{reviews}</span></td>"+
    "</tr>"+
	"</table>"+
	"</div>"],

	
   items: [
            {
				xtype: 'toolbar',
                docked: 'top',
                title: '<div style="text-align:center;">App-A-Day</div>',
				//replace with app logo >> title: '<div style="text-align:center;"><img src="images/logo.png>'

				items: 
				[
				{
                        xtype: 'button',
						cls: 'infoApps',
                        iconCls: 'info',
						iconMask: true,
						id: 'infoApps',
						dock: 'left',

                    },
                    { xtype: 'spacer' },
					
                    {
                        xtype: 'button',
                        cls: 'refreshApps',
                        iconCls: 'refresh',
						iconMask: true,
                        id: 'refreshApps',
						dock: 'right',
						handler:function(){
                        //Ext.Msg.confirm('Refresh Page')
						window.location.reload();

                    }
                    }
                ]
			},
			{
				xtype: 'toolbar',
                docked: 'bottom',
				layout: { pack: 'center',type: 'hbox'},
				
				items:
				[
				    {
                        xtype: 'button',
						text:'Get it now',
						ui: 'confirm',
						id: 'getApp',
						iconCls:'download',
						//Ext.Msg.confirm('Tap Ok to proceed...')
						
					}
				]  
			}
        ]
 }
});
