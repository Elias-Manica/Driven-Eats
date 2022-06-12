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

  botaoClicado = document.querySelector(".principal .escondido");
  if (botaoClicado !== null) {
    botaoClicado.classList.remove("escondido");
    botaoClicado.classList.remove("cor");
    botaoClicado.classList.add("branco");
  }
  elemento.classList.add("escondido");
  elemento.classList.add("cor");
  elemento.classList.remove("branco");
}

function botaoSelecionadoBebida(elemento) {
  selecionarBebida = elemento.innerHTML;

  botaoClicadoBebi = document.querySelector(".bebida .escondido ");
  if (botaoClicadoBebi !== null) {
    botaoClicadoBebi.classList.remove("escondido");
    botaoClicadoBebi.classList.remove("cor");
    botaoClicadoBebi.classList.add("branco");
  }
  elemento.classList.add("escondido");
  elemento.classList.add("cor");
  elemento.classList.remove("branco");
  selecionarPedido();
}

function botaoSelecionadoSobremesa(elemento) {
  selecionarSobremesa = elemento.innerHTML;

  icone = document.querySelector(".sobremesa .icone");

  botaoClicadoSobre = document.querySelector(".sobremesa .escondido ");
  if (botaoClicadoSobre !== null) {
    botaoClicadoSobre.classList.remove("escondido");
    botaoClicadoSobre.classList.remove("cor");
    botaoClicadoSobre.classList.add("branco");
  }
  elemento.classList.add("escondido");
  elemento.classList.add("cor");
  elemento.classList.remove("branco");
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
