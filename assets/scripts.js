let valorAtualPrint = document.getElementsByClassName("valorAtual")[0];
let valorAtual = 0;

function menosUm() {
	valorAtual = valorAtual - 1;
	valorAtualPrint.innerHTML = valorAtual;
}

function maisUm() {
	valorAtual = valorAtual + 1;
	valorAtualPrint.innerHTML = valorAtual;
}