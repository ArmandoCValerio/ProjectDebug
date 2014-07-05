Ext.define('Kontaktliste.view.Main', 
{
	extend: 'Ext.navigation.View',
	xtype: 'main',
	config: 
	{
		items:
		[
			{
				xtype: 'kontaktlist'
			},
		],
		
		defaultBackButtonText: 'Zurück',
	},
});

