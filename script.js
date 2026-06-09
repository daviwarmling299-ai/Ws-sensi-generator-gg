function gerarNumero(min,max){
return Math.floor(Math.random()*(max-min+1))+min;
}

function gerarConfig(){

const versao =
document.getElementById("versao").value;

const perfil =
document.getElementById("perfil").value;

const resolucao =
document.getElementById("resolucao").value;

let min,max;

if(perfil==="Baixa"){
min=0;
max=700;
}
else if(perfil==="Média"){
min=701;
max=1400;
}
else{
min=1401;
max=2000;
}

document.getElementById("rVersao").textContent=versao;
document.getElementById("rPerfil").textContent=perfil;
document.getElementById("rResolucao").textContent=resolucao;

document.getElementById("horizontal").textContent=
gerarNumero(min,max);

document.getElementById("vertical").textContent=
gerarNumero(min,max);

document.getElementById("horizontalAlt").textContent=
gerarNumero(min,max);

document.getElementById("verticalAlt").textContent=
gerarNumero(min,max);

document.getElementById("resultado").style.display="block";
}
