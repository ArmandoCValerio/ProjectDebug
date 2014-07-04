Ext.define('Kontaktliste.view.KontaktForm', 
{
	extend: 'Ext.form.Panel',
	//extend: 'Ext.tab.Panel',
	xtype: 'kontaktform',
	requires: 
	[
		'Ext.form.Panel',
		'Ext.tab.Panel',
		'Ext.form.FieldSet',
		'Ext.field.Text',
		'Ext.field.Select'
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
						required: true,
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
				//{ iconCls: 'action' },
				//{ iconCls: 'add' },
				//{ iconCls: 'arrow_up' },
				//{ iconCls: 'arrow_right' },
				//{ iconCls: 'arrow_down' },
				//{ iconCls: 'arrow_left' },
				{ 
					iconCls: 'home',
					handler: function()
					{
						Ext.Msg.alert("Home button click!");
					}
				},
								
				{
					iconCls: 'compose',
					scope: this,
					handler: function(btn)
					{
						Ext.Msg.alert("Kontakt editieren");
						if  (btn.hasDisabled)
						{
							Ext.getCmp('daten').enable();
							Ext.getCmp('ich').enable();
							btn.hasDisabled = false;
						} else
						  {
							Ext.getCmp('daten').disable();
							Ext.getCmp('ich').disable();
							btn.hasDisabled = true;
						   }
					}
				},

				{
					iconCls: 'delete',
					handler: function()
					{
						Ext.Msg.alert("Kontakt löschen!");
					}
				},
				{ iconCls: ' ' },
				//{ iconCls: 'reply' },
				//{ iconCls: 'search' },
				{
					iconCls: 'star',
					handler: function()
					{
						Ext.Msg.alert("Als Favorit markieren!");
					}
				},
				//{ iconCls: 'locate' },
				{
					iconCls: 'maps',
					handler: function()
					{
						Ext.Msg.alert("Standort anzeigen!");
					}
				},
				//{ iconCls: 'trash' },
				{
					iconCls: 'refresh',
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
