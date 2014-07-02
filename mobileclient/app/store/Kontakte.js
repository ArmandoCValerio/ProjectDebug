Ext.define('Kontaktliste.store.Kontakte', 
{
	extend: 'Ext.data.Store',
	config: 
	{
		proxy:
		{
			type: 'rest',
			url: '/ProjectDebug/service/Kontakte',
			reader: 
			{
				type: 'json'
			},
		
			listeners: 
			{
				exception: function(proxy, request)
				{
					Ext.Msg.alert('Fehler', request.statusText);
				}	
			}
		},	
		
		model: 'Kontaktliste.model.Kontakt',		
		autoLoad: true
	}
});
