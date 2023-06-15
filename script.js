//Calcula o IMC
function CalcularIMC() {
	var peso = document.getElementById("peso").value;
	var altura = document.getElementById("altura").value;
	var imc = peso / (altura * altura);
	var resultado = document.getElementById("resultado");

	//Se os dois inputs estiverem vazios, ele manda preencher
	if (peso === "" && altura === "") {
		resultado.innerHTML = "Preencha todos os campos!";
	} 
	
	//Se o peso estiver vazio e a altura não, ele manda preencher o peso
	if (peso === "" && altura != ""){
		resultado.innerHTML = "Preencha o seu peso"
	}

	//Se a altura estiver vazia e o peso não, ele manda preencher a altura
	if (peso != "" && altura === ""){
		resultado.innerHTML = "Preencha sua altura"
	}

	//Se tudo tiver correto, ele continua normal fixando o IMC em duas casas decimais
	if (peso && altura != ""){
		resultado.innerHTML = " " + imc.toFixed(2);
	}
	
}




//Limpa os resultados anteriores de IMC
function Limpar() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerHTML = '';
  }

//Muda o tema da página para escuro
document.getElementById("darkModeButton").addEventListener("click", function() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  	});

//Esse trecho pega elementos com nome "btn-info" e verifica quando é clicado, em seguida, ele chama a infobox que é caixa de texto que aparece
var btnInfo = document.getElementById('btn-info');
	var infobox = document.getElementById('infobox');
	btnInfo.addEventListener('click', function() {
  	infobox.style.display = 'block';
	});

//Responsável por fechar a infobox, no caso ele faz a mesma coisa que o de cima, porém, ele tira o estilo, fazendo com que ela suma.
var btnClose = document.getElementById("btnClose");
	var infobox = document.getElementById("infobox");
btnClose.addEventListener("click", function() {
  	infobox.style.display = "none";
});



  
	
  
  
  
  





  

  

  
  

