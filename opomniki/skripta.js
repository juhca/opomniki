window.addEventListener('load', function() {
	//stran nalozena
	
	var prijavi=function(event){
		var uporabnik=document.querySelector("#uporabnisko_ime").value;
		document.querySelector(".pokrivalo").style.display = "none";
		document.getElementById("uporabnik").innerHTML=uporabnik;
	}
	
	var dodajOpomnik=function(event){
		var naziv=document.getElementById("naziv_opomnika").value;
		var cas=document.getElementById("cas_opomnika").value;
		document.getElementById("naziv_opomnika").innerHTML="";
		document.getElementById("cas_opomnika").innerHTML="";
		document.getElementById("opomniki").innerHTML+="<div class='opomnik'><div class='naziv_opomnika'>"+naziv+"</div><div class='cas_opomnika'> Opomnik čez <span>"+cas+"</span> sekund.</div></div>";
		
	}
	
	document.querySelector("#prijavniGumb").addEventListener('click',prijavi);
	document.querySelector("#dodajGumb").addEventListener('click',dodajOpomnik);
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
			
			if(cas>0){
				casovnik.innerHTML=cas-1;
			}
			else{
				var naziv=document.querySelector(".naziv_opomnika").innerHTML;
				alert("Opomnik opomnika opomnjen");
				document.querySelector("#opomniki").removeChild(opomnik);
			}
			
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});

/*window.addEventListener('load', function() {
	//stran nalozena
		
	var prijavi=function(event){
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector(".pokrivalo").style.display = "none";
		document.getElementById("uporabnik").innerHTML = uporabnik;
	}
	
	var dodajOpomnik=function(event){
		var naziv = document.getElementById("naziv_opomnika").value;
		var cas = document.getElementById("cas_opomnika").value;
			
			// resetiram
		document.getElementById("naziv_opomnika").innerHTML = ";"
		document.getElementById("cas_opomnika").innerHTML = "";
			
		document.getElementById("opomniki").innerHTML+="<div class='opomnik'><div class='naziv_opomnika'>"+naziv+"</div><div class='cas_opomnika'> Opomnik čez <span>"+cas+"</span> sekund.</div></div>";
	}
	
	document.querySelector("#prijavniGumb").addEventListener('click', prijavi);
	document.querySelector("#dodajGumb").addEventListener('click', dodajOpomnik);
		//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		var i
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	
});*/