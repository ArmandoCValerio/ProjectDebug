Ext.define('Kontaktliste.controller.AppController',
{
	extend: 'Ext.app.Controller',
	config: 
	{
		control: 
		{
				kontaktlist:
				{
					itemtap: 'showKontaktDetails'
				}
		},
		refs: 
		{
			main: 'main'
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
				tag = 30 + tag; monat--;
			};
			
			if (monat < 0)
			{
				monat = 12 + monat; jahr--;
			};
			
			wAlter    = jahr + ' Jahre ' +
						'- ' + monat + ' Monat(e) ' +
						'- ' + tag + ' Tag(e)';
		};

		return wAlter;
	}
	
});