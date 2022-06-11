function botaoSelecionado(elemento) {
  const botaoClicado = document.querySelector(".principal .escondido");
  if (botaoClicado !== null) {
    botaoClicado.classList.remove("escondido");
  }
  elemento.classList.add("escondido");
}

function botaoSelecionadoBebida(elemento) {
  const botaoClicadoBebi = document.querySelector(".bebida .escondido ");
  if (botaoClicadoBebi !== null) {
    botaoClicadoBebi.classList.remove("escondido");
  }
  elemento.classList.add("escondido");
}

function botaoSelecionadoSobremesa(elemento) {
  const botaoClicadoSobre = document.querySelector(".sobremesa .escondido ");
  if (botaoClicadoSobre !== null) {
    botaoClicadoSobre.classList.remove("escondido");
  }
  elemento.classList.add("escondido");
}
