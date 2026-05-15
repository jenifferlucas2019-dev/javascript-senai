let cont = 0
function incrementarcontagem(){
    cont = cont + 1
    document.getElementById('p-contagem').innerHTML = cont
}



























let global ='eu sou uma variável global'
function funcao1(){
    let local = 'sou uma variável local :D'
    console.log(local);
    console.log(global);
}
function funcao2(){
    console.log(global);
    // console.log(local);
}









// funcao1()
// funcao2()