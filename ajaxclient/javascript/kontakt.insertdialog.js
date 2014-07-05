$.widget("kontakt.insertDialog",$.ui.dialog, 
{  			// Definiton des Widgets mit Name ""
    options:
	{
		autoOpen: false,
		modal: true,
		width: 550
	},
	
	open: function(kontakt)
	{
		
		this._kontakt = kontakt;											//Stellt dieser Instanz das Attribut todo zur Verfügung 
		this.element.find("#title_field").removeClass("ui-state-error").val(kontakt.title);	//CSS-Class entfernen
		this.element.find(".validation_message").empty();									//Entfernen des Textes
		this.element.find("#title_field").val(kontakt.title);
		this.element.find("#due_date_field").val(kontakt.due_date);
		this.element.find("#notes_field").val(kontakt.notes);
		this._super();
	},
	
	_create: function()
	{
		var that = this;
		this.options.buttons = [
		  {
		    text: "OK",
			click: function()
			{
				that._insertKontakt();
			}
		  },
		  {
		    text: "Abbrechen",
  		    click: function()
		    {
			  that.close();
			  that._trigger("onKontaktCanceled");
		    }
		  }
		];
	
	this._super();
	
	},
	
	_insertTodo: function()
	{
		var kontakt = 
		{
			title: this.element.find("#title_field").val(),
			due_date: this.element.find("#due_date_field").val(),
			notes: this.element.find("#notes_field").val(),
		};
		
		$.ajax(
		{
		   type: "POST",
		   url: this._todo.url,
		   //headers: {"If-Match": this._kontakt.version },
		   data: kontakt,
		   
		   success: function()
		   {
			  this.close();
			  this._trigger("onKontaktTodoInserted");
		   },
		   
		   error: function(request)
		   {
				this.element.find("#title_field").removeClass("ui-state-error").val(kontakt.title);	//CSS-Class entfernen
				this.element.find(".validation_message").empty();									//Entfernen des Textes

				if  (request.status == "400")
				{
					var validationMessages = $.parseJSON(request.responseText);
					if  (validationMessages.title)
					{
						this.element.find(".validation_message").text(validationMessages.title);
						this.element.find("#title_field").addClass("ui-state-error").focus();
					}
				}
		   },
		   
		   context: this
		});		
		
	}
	
		
});		
