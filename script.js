let botaoClicado;
let botaoClicadoBebi;
let botaoClicadoSobre;
let fecharPedido;
let selecionarComida;
let selecionarBebida;
let selecionarSobremesa;
let icone;

function botaoSelecionado(elemento) {
  selecionarComida = elemento.innerHTML;

  icone = document.querySelector(".principal .icone");

  botaoClicado = document.querySelector(".principal .escondido");
  if (botaoClicado !== null) {
    botaoClicado.classList.remove("escondido");
    icone.classList.add("oculto");
  }
  elemento.classList.add("escondido");
  icone.classList.remove("oculto");
  selecionarPedido();
}

function botaoSelecionadoBebida(elemento) {
  selecionarBebida = elemento.innerHTML;

  icone = document.querySelector(".bebida .icone");

  botaoClicadoBebi = document.querySelector(".bebida .escondido ");
  if (botaoClicadoBebi !== null) {
    botaoClicadoBebi.classList.remove("escondido");
  }
  elemento.classList.add("escondido");
  icone.classList.remove("oculto");
  selecionarPedido();
}

function botaoSelecionadoSobremesa(elemento) {
  selecionarSobremesa = elemento.innerHTML;

  icone = document.querySelector(".sobremesa .icone");

  botaoClicadoSobre = document.querySelector(".sobremesa .escondido ");
  if (botaoClicadoSobre !== null) {
    botaoClicadoSobre.classList.remove("escondido");
  }
  elemento.classList.add("escondido");
  icone.classList.remove("oculto");
  selecionarPedido();
}

function selecionarPedido() {
  if (selecionarComida && selecionarBebida && selecionarSobremesa) {
    fecharPedido = document.querySelector(".fecharPedido");
    fecharPedido.classList.add("fundoVerde");
    let frase = document.querySelector(".fraseBotao");
    frase.innerHTML = "Fechar pedido";
  }
}
