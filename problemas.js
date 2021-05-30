function limpiarRegistro() {
document.getElementById("miForm").reset();
}

var resp1 = function(n1,n2){
var x  = parseFloat(document.getElementById("x").value);
var y  = parseFloat(document.getElementById("y").value);
f = x+y;
	alert("Sustitucion: f(x)="+x+"+"+y);
	return "Resultado: f(x)="+f;
}
var resp2 = function(n1,n2){
var x  = parseFloat(document.getElementById("x").value);
var y  = parseFloat(document.getElementById("y").value);
f = x-y;
	alert("Sustitucion: f(x)="+x+"-"+y);
	return "Resultado: f(x)="+f;
}
var resp3 = function(n1,n2){
var x  = parseFloat(document.getElementById("x").value);
var y  = parseFloat(document.getElementById("y").value);
f = x*y;
	alert("Sustitucion: f(x)="+x+"x"+y);
	return "Resultado: f(x)="+f;
}
var resp4 = function(n1,n2){
var x  = parseFloat(document.getElementById("x").value);
var y  = parseFloat(document.getElementById("y").value);
f = x/y;
	alert("Sustitucion: f(x)="+x+"/"+y);
	return "Resultado: f(x)="+f;
}



var vel = function(n1){
var s  = parseFloat(document.getElementById("s").value);
km = s*1000;
v = km/240;
alert("Conversion a metros: "+s+" km x 1000m = "+km);
alert("Conversion de minutos a segundos: 4 min x 60s = 240s");
alert("Desarrollo del problema: "+km+"m/240s");
	return "Resultado: "+v+" m/s";
}