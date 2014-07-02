Ext.define('Kontaktliste.view.KontaktList', 
{
	extend: 'Ext.dataview.List',
	xtype: 'kontaktlist',
	config: 
	{
		store: 'Kontakte',
		itemTpl: '<div>Name: {cNName}, {cVName}</div><div>Mail: {cMail}</div><div>Phone: {cPhone}</div>',
		emptyText: 'keine Kontakte'		
	}
});
