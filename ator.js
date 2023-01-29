//código do ator
let xAtor = 80;
let yAtor = 366;
let colissao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}

function verificaColiao(){
  //collideRectCircle(x1, y1, largura1, altura1, cx, cy, diâmetro)
  for (i = 0; i < imagensCarros.length; i +=1){
    colissao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarro, alturaCarro, xAtor, yAtor, 14);
    if(colissao){
      voltaAtorParaPosicaoInicial();
      somColissao.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor= 366;
}

function incluiPontos(){
  fill(color(255, 246, 50))
  textAlign(CENTER);
  textSize(28)
  text(meusPontos, width / 5, 28);
}

function marcaPonto(){
  if(yAtor < 10){
    meusPontos +=1;
    voltaAtorParaPosicaoInicial();
    somPontos.play();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}