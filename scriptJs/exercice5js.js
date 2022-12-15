function verif()
{
        var nom = document.formulaire_contact.nom.value;
        var prenom = document.formulaire_contact.prenom.value;
        var date = document.formulaire_contact.date.value;
        var cp = document.formulaire_contact.cp.value;
        var adresse = document.formulaire_contact.adresse.value;
        var ville = document.formulaire_contact.ville.value;
        var mescommandes = document.formulaire_contact.mescommandes.value;
        var email = document.formulaire_contact.email.value;
        var cgu = document.querySelector('#cgu:checked');
        var question = document.formulaire_contact.question.value;

        var verif 	= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/
        var ctrnom= /^[a-zA-Z]{2,}$/
        var ctrprenom = /^[a-zA-Z]{2,}$/
        var ctrcp = /^[0-9]{4,5}$/ 
        var ctrdate = /^[0-9]{4,4}-[0-9]{2,2}-[0-9]{2,2}$/
        var ctrquestion = /^[a-zA-Z0-9_.-]{4,}$/
        var ctradresse = /^[a-zA-Z0-9_.-]{2,}$/
        var ctrville= /^[a-zA-Z]{1,}$/
        var testedate = date.split('-');
        var dateactuelle=new Date()
        var year = dateactuelle.getFullYear();
        var diffdate = year - 110;
        var dateenv = year - 15;
        var validy = false
        if(parseInt(testedate[0])<parseInt(dateenv)&&testedate[0]>diffdate){
        validy = true
        }
    if (verif.exec(email) == null)
    {

        document.getElementById("demail").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">vous devez entrer une email correct</div>";
        document.getElementById("email").className = "form-control is-invalid";
        var controlmail = false;

    }
    else
    {

        document.getElementById("email").className = "form-control is-valid";
        document.getElementById("demail").innerHTML="";
        var controlmail = true; } 

  
    if (ctradresse.exec(adresse) == null)
    {

        document.getElementById("dadresse").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">vous devez entrer une adresse correct</div>";
        document.getElementById("adresse").className = "form-control is-invalid";
        var controladresse = false;

    }
    else
    {

        document.getElementById("adresse").className = "form-control is-valid";
        document.getElementById("dadresse").innerHTML="";
        var controladresse = true;

    } 
    if (ctrville.exec(ville) == null)
    {

        document.getElementById("dville").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">vous devez entrer une ville correct</div>";
        document.getElementById("ville").className = "form-control is-invalid";
        var controlville= false;

    }
    else
    {

        document.getElementById("ville").className = "form-control is-valid";
        document.getElementById("dville").innerHTML="";
        var controlville = true;

    } 
    if (ctrcp.exec(cp) == null)
    {

        document.getElementById("dcp").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">vous devez entrer un code postal correct entre 4 à 5 chiffre suivant le pays</div>";
        document.getElementById("cp").className = "form-control is-invalid";
        var controlcp = false;

    }
    else
    {

        document.getElementById("cp").className = "form-control is-valid";
        document.getElementById("dcp").innerHTML="";
        var controlcp = true;

    } 

    if (ctrnom.exec(nom) == null)
    {
      
        document.getElementById("nom").className = "form-control is-invalid";
        document.getElementById("dnom").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Veuillez entrer correctement votre Nom</div>";
        var controlnom = false;

    }
    else
    {

        document.getElementById("nom").className = "form-control is-valid";
        document.getElementById("dnom").innerHTML="";
        var controlnom = true;
    }


    if (ctrprenom.exec(prenom) == null)
    {

        document.getElementById("dprenom").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Veuillez entrer correctement votre Prénom</div>";
        document.getElementById("prenom").className = "form-control is-invalid";
        var controlprenom = false;
    
    }
    else
    {
        document.getElementById("prenom").className = "form-control is-valid";
        document.getElementById("dprenom").innerHTML="";
        var controlprenom = true;
    }


    if (ctrdate.exec(date) == null||validy==false)
    {
        document.getElementById("ddate").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Veuillez entrer une date valide exemple 01/01/2020</div>";
        var controldate = false;
        document.getElementById("date").className = "form-control is-invalid";
    }
    else
    {
        document.getElementById("date").className = "form-control is-valid";
        document.getElementById("ddate").innerHTML="";
        var controldate = true;
    }


    if (mescommandes == "")
    {
       
        document.getElementById("dmescommandes").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Vous devez séléctionner un sujet</div>";
        document.getElementById("mescommandes").className = "form-control is-invalid";
        var controlmescommandes = false;
   
    }
    else
    {
        document.getElementById("mescommandes").className = "form-control is-valid";
        document.getElementById("dmescommandes").innerHTML="";
        var controlmescommandes = true;
    }


    if (ctrquestion.exec(question) == null)
    {
   
        document.getElementById("dquestion").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Vous devez nous indiquer votre question</div>";
        document.getElementById("question").className = "form-control is-invalid";
        var controlquestion = false; 

    }
    else
    {
        document.getElementById("question").className = "form-control is-valid";
        document.getElementById("dquestion").innerHTML=""
        var controlquestion= true;
    }


    if (cgu == null)
    {
  
        document.getElementById("dcgu").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Vous devez accepter nos conditionns</div>";
        document.getElementById("cgu").className = "custom-control-input is-invalid";
        var controlcgu = false;

    }
    else
    {
        document.getElementById("cgu").className = "custom-control-input is-valid";
        document.getElementById("dcgu").innerHTML="";
        var controlcgu = true;
    }

        if(controlcp&&controlville&&controladresse&&controlnom&&controlprenom&&controlmail&&controldate&&controlmescommandes&&controlquestion&&controlcgu)
        {
            return true;
        }
        else
        {
            return false;
        }
}