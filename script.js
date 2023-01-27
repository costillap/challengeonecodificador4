const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function encriptar(textoEncriptado){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase()
    
    for (let i = 0; i < matriz.length; i++){
        if (textoEncriptado.includes(matriz[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return textoEncriptado;
}

function desencriptar(textoDesencriptado){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase()
    
    for (let i = 0; i < matriz.length; i++){
        if (textoDesencriptado.includes(matriz[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    return textoDesencriptado;
}

function copiar(){
    const mensajeCopia = mensaje.value
    navigator.clipboard.writeText(mensajeCopia)
}

function botonEncriptar(){
    const mensajeEncriptado = encriptar(textArea.value);
    mensaje.value = mensajeEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function botonDesencriptar(){
    const mensajeDesencriptado = desencriptar(textArea.value);
    mensaje.value = mensajeDesencriptado;
    textArea.value = "";
}

