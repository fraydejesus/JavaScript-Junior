
dineroCofla = prompt("Cuanto dinero tienes Cotla?");
dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
dineroPedro = prompt("Cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla puedes compra la paleta de agua");
    alert("y te sobra" + dineroCofla - 1);
} 
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla puedes compra la paleta de crema");
    alert("y te sobra" + dineroCofla - 1.6);
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla puedes compra el helado marca heladix");
    alert("y te sobra" + dineroCofla - 1.7);
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla puedes compra el helado marca heladovich");
    alert("y te sobra" + dineroCofla - 1.8);
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla puedes compra el helado marca helardo");
    alert("y te sobra" + dineroCofla - 2.9);
}
else if (dineroCofla >= 2.9) {
    alert("Cofla puedes compra el helado con confites o el pote de 1/4 KG")
}
else{
    alert("No tienes dinero para comparar un Helado")
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Compra la paleta de agua")
} 
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Compra la paleta de crema")
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Compra el helado marca heladix")
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Compra el helado marca heladovich")
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Compra el helado marca helardo")
}
else if (dineroRoberto >= 2.9) {
    alert("helado con confites o el pote de 1/4 KG")
}
else{
    alert("No tienes dinero para comparar un Helado")
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Compra la paleta de agua")
} 
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Compra la paleta de crema")
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Compra el helado marca heladix")
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Compra el helado marca heladovich")
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Compra el helado marca helardo")
}
else if (dineroPedro >= 2.9) {
    alert("helado con confites o el pote de 1/4 KG")
}
else{
    alert("No tienes dinero para comparar un Helado")
}