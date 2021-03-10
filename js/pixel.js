const titulo = document.querySelector("h2");
escreva(titulo);

function escreva(elemento){
    const textoLista = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoLista.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

function changeColor(elemento){
    elemento.style.backgroundColor = "white";
}

function resetColor(elemento){
    elemento.style.backgroundColor = "black";
}
