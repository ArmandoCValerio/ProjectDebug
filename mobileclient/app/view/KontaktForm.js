Ext.define('Kontaktliste.view.KontaktForm', 
{
	extend: 'Ext.form.Panel',
	xtype: 'kontaktform',
	requires: 
	[
		'Ext.field.Text'
	],
	
	config: 
	{
		items: 
		[
			{
				xtype: 'textfield',
				name:  'cNName',
				label: 'Nachname',
				readOnly: true
			},
			
			{
				xtype: 'textfield',
				name:  'cVName',
				label: 'Vorname',
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
				readOnly: true
			},
			
			{
				xtype: 'textfield',
				name:  'cCity',
				label: 'Ort',
				readOnly: true
			},
			
			{
				xtype: 'fieldset',
				title: 'Übermich',
				//instructions: 'Tell us all about yourself',
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
						readOnly: false
					}
				]
			},
			
			{
				xtype: 'fieldset',
				title: 'Zusatz',
				//instructions: 'Tell us all about yourself',
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
			}	
		]		
	},
	
});
