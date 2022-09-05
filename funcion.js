const mensajeEntrada=document.querySelector(".textIn");
const visualizarMensa=document.querySelector(".textOut");


function encriptarTexto(textoEncriptado){
    let textoClaves=[
        ["e","enter"],
        ["o","ober"],
        ["i","imes"],
        ["a","ai"],
        ["u","ufat"]
    ]
    textoEncriptado=textoEncriptado.toLowerCase();

    for(let i = 0; i < textoClaves.length; i++){
        if(textoEncriptado.includes(textoClaves[i][0])){
            textoEncriptado=textoEncriptado.replaceAll(
                textoClaves[i][0],
                textoClaves[i][1],
            )
        }
    }
    return textoEncriptado;
}

function botonEncrip(){
    let encriptacionTexto = encriptarTexto(mensajeEntrada.value);
    visualizarMensa.value = encriptacionTexto;
    visualizarMensa.style.backgroundImage ="none";
    mensajeEntrada.value=""
    document.querySelector(".textoCopy").innerHTML = ""
}

function desencripTexto(textoDesencriptado){
    let textoClaves=[
        ["e","enter"],
        ["o","ober"],
        ["i","imes"],
        ["a","ai"],
        ["u","ufat"]
    ]
    textoDesencriptado=textoDesencriptado.toLowerCase();

    for(let i = 0; i < textoClaves.length; i++){
        if(textoDesencriptado.includes(textoClaves[i][1])){
            textoDesencriptado=textoDesencriptado.replaceAll(
                textoClaves[i][1],
                textoClaves[i][0],
            )
        }
    }
    return textoDesencriptado;
}
function botonDesencrip(){
    const desencriptacionTexto = desencripTexto(mensajeEntrada.value);
    visualizarMensa.value = desencriptacionTexto
    mensajeEntrada.value = ""
}

function botonCopy(){
    visualizarMensa.select()
    navigator.clipboard.writeText(visualizarMensa.value)
    visualizarMensa.value = ""
    document.querySelector(".textoCopy").innerHTML = ""
    alert("texto copiado")
}
