var num=document.getElementById("num-input");.value.trim();
var container=document.getElementById("container");
function leftIn(){
	var div=document.createElement("div");
	div.className="box";
	div.innerHTML=num;
}
function leftOut(){
	var div=document.createElement("div");
	div.className="box";
	div.innerHTML=num;
}
function rightIn(){
	var div=document.createElement("div");
	div.className="box";
	div.innerHTML=num;
	container.appendChild(div);
}
function rightOut(){
	var div=document.createElement("div");
	div.className="box";
	div.innerHTML=num;
}
function init(){
	document.getElementById("left-in").onclick=leftIn;
	document.getElementById("left-out").onclick=leftOut;
	document.getElementById("right-in").onclick=rightIn;
	document.getElementById("right-out").onclick=rightOut;
}
init();