var tab = ["Audrey", " Aurélien", " Flavien", " Jérémy", " Laurent", " Melik", " Nouara", " Salem", " Samuel", " Stéphane"];
var saisi = window.prompt("Liste des prénoms : "+tab+" Entrer le prénom à effacer")

	document.write("Voici la liste "+tab+"<br><br>")
var suprenommin = String(saisi).charAt(0).toUpperCase() + String(saisi).slice(1).toLowerCase();

if(tab.includes(suprenommin))
{

	tab.splice(tab.indexOf(suprenommin),1);

	alert("Voici la nouvelle liste "+tab)
	console.log(tab)
		document.write("Voici la nouvelle liste "+tab)
}
else
{
	alert("je n'est pas trouvé le prénom")
	console.log(tab)
}