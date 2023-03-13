const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const subtitulo = document.querySelector(".mensajeSubtitulo");
const infoMensaje = document.querySelector(".infoMensaje");
const botonCopiar = document.querySelector(".copiar");
const divCopiar = document.querySelector(".divCopiar");
const main = document.querySelector("main");
const media768 = window.matchMedia(
  "(min-width: 768px) and (max-width: 1023px)"
);
const media375 = window.matchMedia("(max-width: 767px)");
function encriptar(textoEncriptado) {
  let matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  textoEncriptado = textoEncriptado.toLowerCase();

  for (let i = 0; i < matriz.length; i++) {
    if (textoEncriptado.includes(matriz[i][0])) {
      textoEncriptado = textoEncriptado.replaceAll(matriz[i][0], matriz[i][1]);
    }
  }
  return textoEncriptado;
}

function desencriptar(textoDesencriptado) {
  let matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  textoDesencriptado = textoDesencriptado.toLowerCase();

  for (let i = 0; i < matriz.length; i++) {
    if (textoDesencriptado.includes(matriz[i][1])) {
      textoDesencriptado = textoDesencriptado.replaceAll(
        matriz[i][1],
        matriz[i][0]
      );
    }
  }
  return textoDesencriptado;
}

function copiar() {
  const mensajeCopia = mensaje.value;
  navigator.clipboard.writeText(mensajeCopia);
}

function botonEncriptar() {
  const mensajeEncriptado = encriptar(textArea.value);
  if (media768.matches) {
    main.style.height = "1384px";
    mensaje.style.display = "block";
    mensaje.value = mensajeEncriptado;
    mensaje.style.height = "180px";
    subtitulo.style.display = "none";
    infoMensaje.style.display = "none";
    divCopiar.style.display = "block";
    botonCopiar.style.visibility = "visible";
  } else {
        if (media375.matches) {
            main.style.height = "1190px";
            mensaje.style.display = "block";
            mensaje.value = mensajeEncriptado;
            mensaje.style.height = "280px";
            subtitulo.style.display = "none";
            infoMensaje.style.display = "none";
            divCopiar.style.display = "block";
            botonCopiar.style.visibility = "visible";
        } else {
            mensaje.value = mensajeEncriptado;
            mensaje.style.backgroundImage = "none";
            mensaje.style.height = "781px";
            subtitulo.style.display = "none";
            infoMensaje.style.display = "none";
            botonCopiar.style.visibility = "visible";
        }
    }
}

function botonDesencriptar() {
  const mensajeDesencriptado = desencriptar(textArea.value);
  mensaje.value = mensajeDesencriptado;
}
