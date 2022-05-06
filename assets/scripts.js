let valorAtualPrint = document.getElementsByClassName("valorAtual");
let valorAtual = 0;

function menosUm() {
	valorAtual = valorAtual - 1;
	valorAtualPrint.innerHTML = valorAtual;
}

function maisUm() {
	valorAtual = valorAtual + 1;
	valorAtualPrint.innerHTML = valorAtual;
}

