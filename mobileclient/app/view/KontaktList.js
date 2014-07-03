Ext.define('Kontaktliste.view.KontaktList', 
{
	extend: 'Ext.dataview.List',
	xtype: 'kontaktlist',
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
			
			{
                xclass: 'Ext.plugin.PullRefresh',
                pullRefreshText: 'Aktualisieren...',
				
            }
		],
		
		itemTpl: '<div>Name: {cNName}, {cVName}</div><div>Mail: {cMail}</div><div>Phone: {cPhone}</div>',
		title: 'Kontaktliste',
		grouped: true,
		emptyText: 'keine Kontakte'
	
	},
});
