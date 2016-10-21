
$(function validation()
{

	if ( (document.formulaire.nom.value =="") || (document.formulaire.nom.value.length < 5 ))
    {
		document.getElementById("error").innerHTML="La saisie du nom est obligatoire";
	
		valid =false;
	return valid;

	}
	
	if (( document.formulaire.prenom.value =="") || (document.formulaire.prenom.value.length < 5 ))
    {
		document.getElementById("error").innerHTML="La saisie du prenom est obligatoire";
	
		valid =false;
	return valid;

	}
	
	if (( document.formulaire.naissance.value =="") || (document.formulaire.naissance.value.length < 5 ))
    {
		document.getElementById("error").innerHTML="La saisie de la date de naissance est obligatoire";
	
		valid =false;
	return valid;

	}
	
	if (( document.formulaire.adresse.value =="") || (document.formulaire.adresse.value.length < 5 ))
    {
		document.getElementById("error").innerHTML="La saisie de l'adresse est obligatoire";
	
		valid =false;
	return valid;

	}
	
	if (( document.formulaire.mail.value =="") || (document.formulaire.mail.value.length < 5 ))
    {
		document.getElementById("error").innerHTML="La saisie du mail est obligatoire";
	
		valid =false;
	return valid;

	}
	
	else
	{
	document.getElementById("resultat").innerHTML= "Bienvenue $(nom).validation()";
	return true;
	}
	
}
  
  $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
  
