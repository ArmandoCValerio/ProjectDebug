Ext.define('Kontaktliste.view.KontaktForm', 
{
	extend: 'Ext.form.Panel',
	xtype: 'kontaktform',
	requires: 
	[
		'Ext.form.Panel',
		'Ext.tab.Panel',
		'Ext.form.FieldSet',
		'Ext.field.Text',
	],
	
	config: 
	{	
		items: 
		[		
			{
				id:    'daten',		
				xtype: 'fieldset',
				title: 'Daten',
				iconCls: 'info',
				items:
				[
					{
						xtype: 'textfield',
						name:  'cNName',
						label: 'Nachname',
						required: true,
						readOnly: true
					},
					
					{
						xtype: 'textfield',
						name:  'cVName',
						label: 'Vorname',
						required: true,
						readOnly: true
					},

					{
						xtype: 'textfield',
						name:  'cPhone',
						label: 'Telefon',
						readOnly: true
					},

					{
						xtype: 'emailfield',
						name:  'cMail',
						label: 'eMail',
						readOnly: true
					},
					
					{
						xtype: 'textfield',
						name:  'cCompany',
						label: 'Firma',
						required: true,
						readOnly: true
					},
					
					{
						xtype: 'textfield',
						name:  'cCity',
						label: 'Ort',
						readOnly: true
					}
				]
			},
			
			{
				id: 'ich',
				xtype: 'fieldset',
				title: 'Übermich',
				iconCls: 'user',
				items: 
				[
					{
						xtype: 'datepickerfield',
						name:  'cBirthDay',
						label: 'Geburtstag',
						dateFormat: 'd.m.Y',
						readOnly: true
					},
					{
						xtype: 'textfield',
						name:  'cAlter',
						label: 'Alter',
						readOnly: true
					}					
				]
			},
			
			{
				id: 'Zusatz',
				xtype: 'fieldset',
				title: 'Zusatz',
				iconCls: 'more',
				items:
				[
					{
						xtype: 'datepickerfield',
						name:  'cCrtDate',
						label: 'Erstellt am',
						dateFormat: 'd.m.Y',
						readOnly: true
					},
					
					{
						xtype: 'textfield',
						name:  'cCrtUser',
						label: 'durch',
						readOnly: true
					},
					
					{
						xtype: 'datepickerfield',
						name:  'cUpdtDate',
						label: 'Geändert am',
						dateFormat: 'd.m.Y',
						readOnly: true
					},
					
					{
						xtype: 'textfield',
						name:  'cUpdtUser',
						label: 'durch',
						readOnly: true
					}
				]
			},	
		//],	
		{
			xtype: 'toolbar',
			ui: 'neutral',
			docked: 'bottom',
			defaults:
			{
				iconMask: true,
				ui: 'plain'
			},
			items:
			[
				{
					iconCls: 'arrow_left',
					id: 'backicon',
					handler: function()
					{
						Ext.Msg.alert("Back button click!");
					}
				},
				
				{ 
					iconCls: 'home',
					id: 'homeicon',
					handler: function()
					{
						Ext.Msg.alert("Home button click!");
					}
				},
								
				{
					iconCls: 'compose',
					id: 'editicon',
					handler: function()
					{
						Ext.Msg.alert("Kontakt editieren");
					}
				},

				{
					iconCls: 'delete',
					id: 'deleteicon',
					handler: function()
					{
						Ext.Msg.alert("Kontakt löschen!");
					}
				},
				
				{ iconCls: ' ' },

				{
					iconCls: 'star',
					id: 'staricon',
					handler: function()
					{
						Ext.Msg.alert("Als Favorit markieren!");
					}
				},
				
				//{ iconCls: 'locate' },
				
				{
					iconCls: 'maps',
					id: 'mapsicon',
					handler: function()
					{
						Ext.Msg.alert("Standort anzeigen!");
					}
				},
				
				//{ iconCls: 'trash' },
				
				{
					iconCls: 'refresh',
					id: 'refreshicon',
					handler: function()
					{
						Ext.Msg.alert("Kontakt aktualisieren!");
						
					},
				},
			],
			layout:
			{
				pack: 'center',
				align: 'center'
			}
		}],
	},
});
