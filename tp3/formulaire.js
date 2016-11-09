 $( function() {
    $( "#datepicker" ).datepicker();
    
$( ".selector" ).datepicker({
  dateFormat: "dd-mm-yy"
});
    
  } );
  
  
  
$(function(){
	
	$("#valider").click(function(){
	        
			  if(($("#nom").val()=="")||($("#prenom").val()=="")||($("#datepicker").val()=="") ||($("#adresse").val()=="") || ($("#mail").val()=="")) 
			  {
			  $(".modal-body").html("Veuillez remplir tous les champs SVP");
			  $(".modal").modal("show");
			  }
			  else
			  {
				$(".modal-header").html("Bienvenu "+$("#nom").val());
				$(".modal-body").html("Vous êtes nés le " +$("#datepicker").val() +" et vous habitez " +$("#image").val());
				$(".modal").modal("show");
				  var mapCanvas = document.getElementById("map");
				  var mapOptions = {
  					  center: new google.maps.LatLng(51.5, -0.2), zoom: 10
 									 };
  var map = new google.maps.Map(mapCanvas, mapOptions);
				
			  }
			 
			 
	}
	);
	
	
	
	
});