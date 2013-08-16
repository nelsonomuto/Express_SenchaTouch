Ext.define 'Notifier.view.FreeAppInfoDataView',
  extend: 'Ext.dataview.DataView'
  alias: 'widget.freeAppInfoDataView'
  requires: [
    'Notifier.store.FreeAppInfo'
  ]
  
  config: 
    store: 'freeAppInfoStore'

    itemTpl: """
    <h2>Free App of Today: </h2>
    <div id='appContent'> 
    
    <p> 
    <a class='label' href='{link}'>App Name: </span><span class='value'>{name}</a>
    </p>
    
    <p> 
    <span class='label'>Price: </span><span class='value'>{price}</span>
    </p>
    
    <p> 
    <span class='label'>List Price: </span><span class='value'>{listPrice}</span>
    </p>
    
    <p> 
    <span class='label'>You Save: </span><span class='value'>{youSave}</span>
    </p>
    
    <p> 
    <span class='label'>Rated: </span><span class='value'>{rated}</span>
    </p>
    
    <p> 
    <span class='label'>Reviews: </span><span class='value'>{reviews}</span>
    </p>
    
    <a href='{link}'><img src='{imageSrc}' /></a>
    </div>
    """
  