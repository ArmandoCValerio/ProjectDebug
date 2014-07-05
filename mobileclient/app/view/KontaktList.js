Ext.define('Kontaktliste.view.KontaktList', 
{
	extend: 'Ext.dataview.List',
	xtype: 'kontaktlist',
	requires:
	[
		'Ext.field.Search',
		'Ext.plugin.PullRefresh',
		'Ext.plugin.ListPaging',
	],
	
	config: 
	{
		store: 'Kontakte',
		xtyp: 'kontaktlist',
		ui: 'round',
		pinHeaders: false,
		itemTpl: '<div>Name: {cNName}, {cVName}</div><div>Mail: {cMail}</div><div>Phone: {cPhone}</div>',
		grouped: true,
		title: 'Kontaktliste',
		emptyText: 'keine Kontakte',
		
		plugins: 
		[
			{
				type: 'listpaging',
				autoPaging: false,
				loadMoreText: 'Weitere Kontakte ...',
				noMoreRecordsText: 'Keine weiteren Kontakte!'
			},
			
			{
				type: 'pullrefresh',
				pullText: 'Zum Aktualisieren herunterziehen ...',
				releaseText: 'Zum Aktualisieren losslassen ...',
				loadingText: 'Laden ...',
				loadedText: '',
				lastUpdatedText: '',
				lastUpdatedDateFormat: ' ',
            }
		],
		
		items: 
		[
			{
				xtype: 'toolbar',
				ui: 'neutral',
				docked: 'bottom',
				defaults:
				{
					iconMask: false,
					ui: 'plain'
				},
				items:
				[
					{
						iconCls: 'add',
						id: 'listaddicon',
						handler: function()
						{
							Ext.Msg.alert("Kontakt hinzufügen!");
						}
					},
					
					{
						iconCls: 'star',
						id: 'liststaricon',
						handler: function()
						{
							Ext.Msg.alert("Favoriten anzeigen!");
						}
					},
	
					{
						iconCls: 'maps',
						id: 'listmapsicon',
						handler: function()
						{
							Ext.Msg.alert("Kontakte in der Nähe anzeigen!");
						}
					},
					
					{
						iconCls: 'refresh',
						id: 'listrefreshicon',
						handler: function()
						{
							Ext.Msg.alert("Kontaktliste aktualisieren!");
						}
					},
					
					{
						iconCls: ' ' 
					},
					
					{
						iconCls: 'settings',
						id: 'listsettingsicon',
						handler: function()
						{
							Ext.Msg.alert("Einstellungen!");
						}
					},
					
					{
						iconCls: 'trash',
						id: 'listtrashicon',
						handler: function()
						{
							Ext.Msg.alert("Gelöschte Kontakte!");
						}
					},
					
					{
						iconCls: ' '
					},
					{
						iconCls: 'search',
						id: 'listsearchicon',
						handler: function()
							{
								Ext.Msg.prompt("Kontakt suchen ...");
							}
					},					
				],
				layout:
				{
					pack: 'center',
					align: 'center'
				}			
			}
		],	
	},
});
