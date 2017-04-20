/*CALCULADORA*/
function clickagemMul(){
  if(isNaN(document.getElementsByTagName("input")[1].value) || isNaN(document.getElementsByTagName("input")[1].value)){
    alert("Digite dois números");
  }
  if(document.getElementsByTagName("button")[0].textContent == "x"){
    document.getElementsByTagName("input")[0].value = document.getElementsByTagName("input")[1].value * document.getElementsByTagName("input")[2].value;
  }
}
function clickagemSub(){
  if(isNaN(document.getElementsByTagName("input")[1].value) || isNaN(document.getElementsByTagName("input")[1].value)){
    alert("Digite dois números");
  }
  if(document.getElementsByTagName("button")[1].textContent == "-"){
    document.getElementsByTagName("input")[0].value = document.getElementsByTagName("input")[2].value - document.getElementsByTagName("input")[1].value;
  }
}
function clickagemDiv(){
  if(isNaN(document.getElementsByTagName("input")[1].value) || isNaN(document.getElementsByTagName("input")[1].value)){
    alert("Digite dois números");
  }
  if(document.getElementsByTagName("button")[2].textContent == "/"){
    document.getElementsByTagName("input")[0].value = document.getElementsByTagName("input")[2].value / document.getElementsByTagName("input")[1].value;
  }
}
function clickagemSoma(){
  if(isNaN(document.getElementsByTagName("input")[1].value) || isNaN(document.getElementsByTagName("input")[1].value)){
    alert("Digite dois números");
  }
  if(document.getElementsByTagName("button")[3].textContent == "+"){
    document.getElementsByTagName("input")[0].value = parseInt(document.getElementsByTagName("input")[1].value) + parseInt(document.getElementsByTagName("input")[2].value);
  }
}

/*CURSOS*/
function seleciona_cursos_disponiveis(){
  document.getElementById("select-chosen").appendChild(document.getElementById("select-available").options[document.getElementById("select-available").selectedIndex]);
}

function seleciona_cursos_escolhidos(){
  document.getElementById("select-available").appendChild(document.getElementById("select-chosen").options[document.getElementById("select-chosen").selectedIndex]);
}

/*TABELA*/
function clickagemExport() {
  linhas = document.getElementsByTagName("tr");
  for(var i=0;i<linhas.length;i++){
    for(var j=0;j<linhas[i].children.length;j++){
        document.getElementById("texto").innerHTML = document.getElementById("texto").value + linhas[i].children[j].innerHTML+";";
    }
    document.getElementById("texto").innerHTML = document.getElementById("texto").value + "\n";
  }
  var texto = document.getElementById("texto").value.slice(0, -1);
  document.getElementById("texto").innerHTML = texto.slice(0, -1);
}
