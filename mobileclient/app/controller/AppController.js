Ext.define('Kontaktliste.controller.AppController',
{
	extend: 'Ext.app.Controller',
	config: 
	{
		control: 
		{
				kontaktlist:
					{
						itemtap: 'showKontaktDetails',
					},		
					'#listrefreshicon':
					{
						tap: 'refreshKontaktList'
					},
				
			//	kontaktform:
					'#refreshicon':
					{
						tap: 'refreshKontakt'
					},		
					'#homeicon':
					{
						tap: 'refreshKontaktList'
					},
					'#backicon':
					{
						tap: 'refreshKontaktList'
					},
					'#deleteicon':
					{
						tap: 'showConfirmDeleteDialog'
					},

				main: 
					{

					}
				
		},

		refs: 
		{
			main: 'main',
			KontaktForm: 'kontaktform',
			deleteicon: '#deleteicon',
			homeicon: '#homeicon',
			refreshicon: '#refreshicon',
			listrefreshicon: '#listrefreshicon',
			backicon: '#backicon',
		}
	},
		
	showKontaktDetails: function(list, index, target, record)
	{
		var main = this.getMain();
		var kontaktForm = Ext.widget('kontaktform');
		
		var wAge = this.computeAge(record.data.cBirthDay);
		record.data.cAlter = wAge;
		
		kontaktForm.setRecord(record);
		main.push(kontaktForm);	
	},
	
	showConfirmDeleteDialog: function()
	{
		Ext.Msg.confirm('Wirklich löschen?', this.deleteKontakt, this);
	},
	
	refreshKontaktList: function()
	{
		Ext.Msg.alert("refreshKontaktList");
		var kontakte = Ext.getStore('Kontakte');
		kontakte.sync(
		{
			callback: function()
			{
				this.getMain().pop();
			},
			scope: this
		});
	},
	
	refreshKontak: function()
	{
		Ext.Msg.alert("refreshKontakt");
		var kontakt = this.getKontaktForm().getRecord();
		var kontakte = Ext.getStore('Kontakte');
		
		kontakte.sync(
		{
			callback: function()
			{
				this.getKontaktForm().push();
			},
			scope: this
		});
	},
	
	deleteKontakt: function(buttonId)
	{
		if (buttonId != 'yes')
		{
			return;
		}
		var kontakt = this.getKontaktForm().getRecord();
		var kontakte = Ext.getStore('Kontakte');
		kontakte.remove(kontakt);
		kontakte.sync(
		{
			callback: function()
			{
				this.getMain().pop();
			},
			scope: this
		});
	},
	
	computeAge: function(bDate)
	{	
		var wAlter = "";
					
		if  (bDate != "") 
		{
			today = new Date();
			
			tag 	= today.getDate()  	  - bDate.getDate();
			monat 	= today.getMonth() 	  - bDate.getMonth();
			jahr 	= today.getFullYear() - bDate.getFullYear();
			
			if (tag < 0)
			{
				tag = 30 + tag;
				monat--;
			};
			
			if (monat < 0)
			{
				monat = 12 + monat;
				jahr--;
			};
			
			wAlter    = jahr + ' Jahre ' +
						'- ' + monat + ' Monat(e) ' +
						'- ' + tag + ' Tag(e)';
		};
		return wAlter;
	}
	
});