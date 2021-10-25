const botonAbrir = document.getElementById("btnMenuOpen"),
    botonCerrar = document.getElementById("btnMenuClose"),
    menuBar = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

botonAbrir.addEventListener("click",
    function () {
        menuBar.classList.add("active");
    });

botonCerrar.addEventListener("click",
    function () {
        menuBar.classList.remove("active");
    });

enlaces.addEventListener("click",
    function () {
        menuBar.style.transitionDelay = ".5s";
        menuBar.classList.remove("active");
    });


const contenedor=document.querySelector(".slider");
const botonIzquierda=document.getElementById("btn-izquierda");
const botonDerecha=document.getElementById("btn-derecha");

botonDerecha.addEventListener("click",function(){
    contenedor.scrollLeft += contenedor.offsetWidth;
});

botonIzquierda.addEventListener("click",function(){
    contenedor.scrollLeft -= contenedor.offsetWidth;
});


const formulario=document.getElementById("formulario");

function validar(e){
    const nombre=document.getElementById("nombre");
    const email=document.getElementById("email");
    const mensaje=document.getElementById("comentarios");
    const exito=document.getElementById("exito");
    const error=document.getElementById("error");

    if(nombre.value ==0 || email.value==0 || mensaje.value==0){
        error.classList.remove("hide");
        error.classList.add("show");

       setTimeout(function(){
        error.classList.remove("show");
        error.classList.add("hide");

       },2000);
        e.preventDefault();
    }else{
        exito.classList.remove("hide");
        exito.classList.add("show");

       setTimeout(function(){
        exito.classList.remove("show");
        exito.classList.add("hide");

       },2000);
        e.preventDefault();
        nombre.value="";
        email.value="";
        mensaje.value="";
    }
}



formulario.addEventListener("submit",validar);




const botonSubir=document.getElementById("boton-subir");


window.addEventListener("scroll",function(){

    const scroll=document.documentElement.scrollTop;
    const completo=document.documentElement.offsetHeight;
    const sizeViewport=document.documentElement.clientHeight;

    if(scroll>100){
        botonSubir.classList.add("show");
    }else{
        botonSubir.classList.remove("show");
    }


    if(completo==(scroll+sizeViewport)){
        botonSubir.classList.add("showFinal");
    }else{
        botonSubir.classList.remove("showFinal");
    }

  
});


botonSubir.addEventListener("click",function(){
    window.scrollTo(0,0);
});

const logo=document.getElementById("logo");

logo.addEventListener("click",function(){
    window.scrollTo(0,0);
});