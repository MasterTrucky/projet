
// CONSTANTES
// NE PAS TOUCHER !!!
let nb_click_td;

const nb_points = new Map([
	[6, 10000],
	[7, 36],
	[8, 720],
	[9, 360],
	[10, 80],
	[11, 252],
	[12, 108],
	[13, 72],
	[14, 54],
	[15, 180],
	[16, 72],
	[17, 180],
	[18, 119],
	[20, 306],
	[21, 1080],
	[22, 144],
	[23, 1800],
	[24, 3600],
]);

// fonctions fournies
// NE PAS MODIFIER !!!!

function valeurs_tableau() {
	let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let resultat = [];

	for (let i=0; i < 9; i++) {
		let nb_alea = Math.ceil(Math.random() * (tab.length - 1));
		resultat.push(tab.splice(nb_alea, 1));
	}

	return resultat;
}


function x_cases_hasard(x) {
	let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let resultat = [];

	for (let i=0; i < x; i++) {
		let nb_alea = Math.ceil(Math.random() * (tab.length - 1));
		resultat.push(tab.splice(nb_alea, 1) - 1);
	}

	return resultat;
}


function init_page() {
	nb_click_td = 0;
	let tab = valeurs_tableau();

	document.getElementById("coups-restants").innerHTML = "Nombre de coups restants : 3";
	afficher_nb_points();

	remplir_table(tab);

	Array.from(document.getElementsByTagName("th")).forEach((element) => {
		element.addEventListener("click", th_click_event);
	});

	cacher_afficher_cases(x_cases_hasard(1));

	let bouton_rejouer = document.getElementById("bouton-rejouer");

	bouton_rejouer.addEventListener("click", click_bouton_rejouer);
}


function afficher_nb_points() {
	let str = "<ul>";
	nb_points.forEach((key, value) => {
		str += `<li>${value}: ${key}\n</li>`;
	});

	document.getElementById("nb-points").innerHTML = str + "</ul>";
}


/* FONCTIONS A REMPLIR */

// QUESTION 1
function remplir_table(tab) {
	let td1 = document.getElementsByTagName("td");
    for (let i = 0; i < tab.length; i++) {
		td1[i].innerHTML = tab[i];
	}
	return;
}


// QUESTION 3
function ids_correspondants(id) {
	if (id == "l1") {
		return ["11","12","13"];		
	} else if (id == "l2") {			
		return ["21","22","23"];		
	} else if (id == "l3") {			
		return ["31","32","33"];		
	} else if (id == "c1") {			
		return ["11","21","31"];		
	} else if (id == "c2") {			
		return ["12","22","32"];		
	} else if (id == "c3") {			
		return ["13","23","33"];		
	} else if (id == "d1") {
		return ["11","22","33"];
	} else if (id == "d2") {
		return ["13","22","31"];
	}
	return;
}


// QUESTION 4
function somme_cases(id_cases) {
	let somme = 0;
	for (let i = 0; i < id_cases.length; i++) {
		let td = parseInt(document.getElementById(id_cases[i]).innerHTML);
		somme += td;
	}
	return somme;
}


// QUESTION 5
function afficher_cases(id_cases) {
	for (let i = 0; i < id_cases.length; i++) {
		let aff_td = document.getElementById(id_cases[i]);
		aff_td.style.backgroundColor = "red";
		aff_td.style.color = "black";
	}
}


// QUESTION 6
function th_click_event(event) {
	console.log("CLICK TH");
	let id = event.currentTarget.id;
	let id_corresp = ids_correspondants(id);
	let somme = somme_cases(id_corresp);
	console.log(somme);
	afficher_cases(id_corresp);
}

// QUESTION 7
function decrementer_coups_restants() {
	let decrementer = document.getElementById("coups-restants");
	
}


// QUESTION 8
function cacher_afficher_cases(cases_affichees) {
	let td = event.currentTarget;

}


// QUESTION 9
function afficher_td(event) {
	console.log("CLICK TD");
}


// QUESTION 10
function finir_jeu(somme) {
	let str = `La somme vaut ${somme}. Points gagnés : ${nb_points.get(somme)}`;

}


// QUESTION 11
function click_bouton_rejouer() {
	console.log("CLICK BOUTON REJOUER")
}