let pu = parseFloat(window.prompt("Entrer le prix unitaire"))
let qtecom = parseFloat(window.prompt("Entrer la quantité"))
let tot = pu * qtecom
let remise = 0
let port = 2
let pap = 0
let calport = 0
let reduc = 0
let total = 0
if(qtecom>0)
{
    if(tot>=100 && tot<=200)
    {
        remise = 5
    }else if( tot>200&&tot<500)
    {
        remise = 10
    }
    else if(tot>=500)
    {
        remise = 10
        port = 0
    }
    if(port !=0){
        calport =  total*port/100

        if(calport<6&&port==2)
        {
        calport =6
        }}
    else
    {calport =0 } 
        reduc = tot*remise/100
        total = parseFloat(tot)-parseFloat(reduc)
     pap = parseFloat(total)+parseFloat(calport)
    document.write("remise "+remise+"% soit -"+reduc+"€ soit "+total+"€ et frais de port "+ port+"% soit "+calport+"€ Total à payer "+pap+"€")
}
else
{ document.write("vous ne pouvez pas saisir "+qtecom+" produit recommencez ya une erreur")}
