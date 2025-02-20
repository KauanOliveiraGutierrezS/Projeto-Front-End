console.log('Hello World!')

var nome=document.querySelector('#nome');
var btgravar=document.querySelector('#btGravar');

if(localStorage.getItem('visitante')){
    saudacao();
}

function saudacao() {
    document.querySelector('#bemVindo').innerHTML= 'Olá <b>'+localStorage.getItem('visitante') + '</b>, seja bem vindo!';
    document.querySelector('.boxJs06').style.display='none';
}

btgravar.onclick=function(){
    localStorage.visitante=nome.value;
    saudacao();
}

// Lista de Tarefas
var lista=document.querySelector('#minhaLista');
var btLista=document.querySelector('#btLista');

function lerLista(){
    if(localStorage.getItem('listaTarefa')){
        lista.innerHTML=localStorage.getItem('listaTarefa');
        btLista.innerHTML='Editar';
    }
}
// confira a permissão para edição do html e o label Salvar/Editr
function gravarLista(){
    if(lista.contentEditable == "false"){
        lista.setAttribute('contenteditable',true);
        btLista.innerHTML='Salvar';
        lista.focus();
    }else{
        lista.setAttribute('contenteditable',false);
        btLista.innerHTML='Editar';
    }
    
}
// Caso o label do botão seja 'Salvar' grava a lista no navegador
function listaLocal(){
    if(btLista.innerHTML == 'Salvar'){
        localStorage.setItem('listaTarefa',lista.innerHTML);
    }
}

btLista.onclick=function(){
    listaLocal();
    gravarLista();
}

lerLista();