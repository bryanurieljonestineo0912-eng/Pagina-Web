function cambiarTema(){
    document.body.classList.toggle("oscuro");
}

let visitas = localStorage.getItem("visitas");

if(visitas === null){
    visitas = 1;
}else{
    visitas = parseInt(visitas) + 1;
}

localStorage.setItem("visitas", visitas);

document.getElementById("visitas").textContent =
    visitas + " visitas registradas en este navegador";
