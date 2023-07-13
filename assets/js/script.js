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
    errado =  point - 19  ;
  botao.addEventListener("click", function(){
    if(botao.value == correto){
      point = point + 1;
      entrada.innerHTML = "";
      jogo.innerHTML = "";
      contador.innerHTML = "Placar: "+point+" clicks";
      contador1.innerHTML = "Parabéns você ganhou!!!";
  
      /// Mostrar Imagem ///
      function display_image(src, width, height, alt) {
        var a = document.createElement("img");
        a.src = src;
        a.width = width;
        a.height = height;
        a.alt = alt;
        a.style = "display:block; margin-top: -70vh;margin-left: auto; margin-right: auto; width: auto;height: auto;"
        document.body.appendChild(a);
      }
      display_image('assets/img/1.gif', 
                      110, 
                      110, 
                    'assets/img/1.gif');

    }
    else{
      this.style.backgroundColor = "red";
      botao.disabled = true;
      point = point + 1;
      point1 = point;
      contador.innerHTML = "Você clicou em " +point1+ " botões !!!";  
    } if(botao.value == errado) {
      entrada.innerHTML = "";
      jogo.innerHTML = "";
      contador1.innerHTML = "Que pena você perdeu 7-7, Não desista tente novamente!!!";
      
      /// Mostrar Imagem ///
      function display_image(src, width, height, alt) {
        var a = document.createElement("img");
        a.src = src;
        a.width = width;
        a.height = height;
        a.alt = alt;
        a.style = "display:block; margin-top: -70vh;margin-left: auto; margin-right: auto; width: auto;height: auto;"
        document.body.appendChild(a);
      }
      display_image('assets/img/2.gif', 
                      110, 
                      110, 
                    'assets/img/2.gif');

    } else {
      
    }
  });

    const jogo = document.querySelector("#jogo");
    jogo.appendChild(botao);

  }

/// Reiniciar jogo ///
  btnReiniciar = document.querySelector("#bttn");
  bttn.addEventListener("click", function() {
    location.reload();
  });         