/// Função Embaralhar ///
var cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 
  13, 14, 15, 16, 17, 18, 19, 20];
  var correto = Math.floor(Math.random() * cartas.length);
  console.log(correto);

/// Certos e errrados ///
  for (let k = 1; k<=20; k++){
    const botao = document.createElement("button");
    botao.classList.add('classBotao');
    botao.value = [k];
    botao.innerHTML = [k];
  point = 0;
  botao.addEventListener("click", function(){
    if(botao.value == correto){
      point = point + 1;
      entrada.innerHTML = "";
      jogo.innerHTML = "";
      contador.innerHTML = "";
      contador1.innerHTML = "Parabéns você ganhou!!!"+"<br>"+" Placar de  "+point+" botões clicados";
    }
    else{
      this.style.backgroundColor = "red";
      botao.disabled = true;
      point = point + 1;
      point1 = point;
      contador.innerHTML = "Você clicou em " +point1+ " botões !!!";  
    } 
  });

    const jogo = document.querySelector("#jogo");
    jogo.appendChild(botao);

  }

/// Reiniciar jogo ///
  btnReiniciar = document.querySelector("#bttn");
  bttn.addEventListener("click", function() {
    alert("O jogo será reiniciado.");
    location.reload();
  });
