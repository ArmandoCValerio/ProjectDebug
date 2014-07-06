
<?php
	
	// Spezielle Klasse um Anfrage von Kontakts abzufragen
	
	class DeleteKontaktCommand 
	{
		private $Result = array();	
	
		public function execute($request,$requestHeaders)
		{
			//Initialisieren
			$objKontakt = new Kontakt();		
			$Result[0] = ErrIds::cOK;				
			//$id = 0;

			if  ((isset($request["id"])) and (is_numeric($request["id"])))
			{
				$objKontakt->cId = $request["id"];
			} 
			else 
			{
				$Result[0] = errIds::cErrWrongParameter;
			}
			
			if ((isset($requestHeaders["If-Match"]) !== TRUE) or
				($requestHeaders["If-Match"]) == NULL)
			{
				$Result[0] = ErrIds::cErrWrongParameter;
			} else
				{
					$objKontakt->cVersion = $requestHeaders["If-Match"];
				}
			
			// Kein Fehler bis hier hin? -> Verarbeitung starten
			if ($Result[0] == errIds::cOK) 
			{
				$objKontaktService = new KontaktService();
				$Result = $objKontaktService->deleteKontakt($objKontakt);
				
				if ($Result[0] == errIds::cOK)
				{						
					header("HTTP/1.1 201");
					header("Location: /ProjectDebug/Service/Kontakte");
				}
			}		
			return $Result;	
		}
	}

?>