/// Função Embaralhar ///
var cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var correto = Math.floor(Math.random() * (19 + 1) + 1);
var errado = Math.floor(Math.random() * (19 + 1) + 1);

console.log(correto);
console.log(errado);

///Verificar numeros///


/// Certos e errrados ///
for (let k = 1; k <= 20; k++){
    const botao = document.createElement("button");
    botao.classList.add('classBotao');
    botao.value = [k];
    botao.innerHTML = [k];
    point = 0;
    bttn.style = "display:none;";
    botao.addEventListener("click", function () {
      if (botao.value == correto) {
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
        bttn.style = "display:block;";
      }
      display_image('assets/img/1.gif', 
                      110, 
                      110, 
                    'assets/img/1.gif');
      }


    else{
      this.style = "animation: none; border-top: 3px solid blue;border-right: 3px solid green;border-bottom: 3px solid red;border-left: 3px solid pink; ";
      botao.disabled = true;
      point = point + 1;
      point1 = point;
      contador.innerHTML = "Pontos: " + point1;
      bttn.style = "display:block;";  
    }
    
    if (botao.value == errado) {
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
