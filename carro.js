let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318]; 
let comprimentoCarro = 50
let alturaCarro = 40

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++)
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
}
let velocidadeCarros = [2, 3.5, 4, 5, 3.5, 2.5]
function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++)
    xCarros[i] -= velocidadeCarros[i]
}
function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
    } 
  }
}
function passouTodaATela(xCarro){
  return xCarro < -50;
}