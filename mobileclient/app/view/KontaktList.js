Ext.define('Kontaktliste.view.KontaktList', 
{
	extend: 'Ext.dataview.List',
	xtype: 'kontaktlist',
	requires:
	[
		'Ext.field.Search',
	],
	config: 
	{

		store: 'Kontakte',
		
		plugins: 
		[
			{
				xclass: 'Ext.plugin.ListPaging',
				autoPaging: false,
				loadMoreText: 'Weitere Kontakte ...',
				noMoreRecordsText: 'Keine weiteren Kontakte!'
			},
			
			// {
                // xclass: 'Ext.plugin.PullRefresh',
                // pullRefreshText: 'Aktualisieren...',
				
            // }
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
						handler: function()
						{
							Ext.Msg.alert("Kontakt hinzufügen!");
						}
					},
					
					{
						iconCls: 'star',
						handler: function()
						{
							Ext.Msg.alert("Favoriten anzeigen!");
						}
					},
					
					//{ iconCls: 'action' },
					//{ iconCls: 'arrow_up' },
					//{ iconCls: 'arrow_right' },
					//{ iconCls: 'arrow_down' },
					//{ iconCls: 'arrow_left' },
					//{ iconCls: 'compose' },
					//{ iconCls: 'delete' },
					//{ iconCls: 'reply' },
					//{ iconCls: 'home' },
					//{ iconCls: 'locate' },
					{
						iconCls: 'maps',
						handler: function()
						{
							Ext.Msg.alert("Kontakte in der Nähe anzeigen!");
						}
					},
					
					{
						iconCls: 'refresh',
						handler: function()
						{
							Ext.Msg.alert("Kontaktliste aktualisieren!");
							Ext.getCmp('kontaktlist').reset();
						}
					},
					
					{
						iconCls: ' ' 
					},
					
					{
						iconCls: 'settings',
						handler: function()
						{
							Ext.Msg.alert("Einstellungen!");
						}
					},
					
					{
						iconCls: 'trash',
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

		
		xtyp: 'kontaktlist',
		ui: 'round',
		pinHeaders: false,
		itemTpl: '<div>Name: {cNName}, {cVName}</div><div>Mail: {cMail}</div><div>Phone: {cPhone}</div>',
		grouped: true,
		title: 'Kontaktliste',
		
		emptyText: 'keine Kontakte'
	},
});
