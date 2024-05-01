const textArea=document.querySelector(".texto");
const mensaje=document.querySelector(".mensaje__encriptado");
const aviso1=document.getElementById('aviso_id');
const imagen1=document.getElementById('imagen_id');
const copiar1=document.getElementById('boton__copiar');
let i;

function encriptar(stringEncriptar){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar=stringEncriptar.toLowerCase();
    for(i=0; i<matrizCodigo.length; i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar=stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

        }  
    }
    return stringEncriptar;
   
}

function desencriptar(stringDesencriptar){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptar=stringDesencriptar.toLowerCase();
    for(i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar=stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

        }  
    }
    return stringDesencriptar;
}
function botonEncriptar(){
    if(validar(textArea.value)){
        const textoEncriptado=encriptar(textArea.value);
        mensaje.value=textoEncriptado;
        limpiar_pantalla();
    }else{
        mensaje_error();
    }
    
    return;
}
function botonDesencriptar(){
    if(validar(textArea.value)){
        const textoDesencriptado=desencriptar(textArea.value);
        mensaje.value=textoDesencriptado;
        limpiar_pantalla();
    }else{
        mensaje_error();
    }
    
    
    return;
}

function copiar(){
    // Obtén el elemento textarea
    const textarea = document.getElementById('mensaje_encriptado');

    // Selecciona todo el contenido del textarea
    textarea.select();

    // Ejecuta el comando para copiar al portapapeles
    document.execCommand('copy');
}
function limpiar_pantalla(){
    aviso1.style.display="none";
    imagen1.style.display="none";
    textArea.value="";
    mensaje.style.display="flex";
    copiar1.style.display="flex";
}
function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return elemento, texto;
}
function validar(campoTexto){
    var regex = /^[a-z s]+$/;
    return regex.test(campoTexto);
}
function mensaje_error(){
    aviso1.style.display="flex";
    alert("ERROR, solo se admiten minusculas");
    mensaje.value="";
}