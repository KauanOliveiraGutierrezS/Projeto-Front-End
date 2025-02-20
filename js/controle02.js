console.log('Hello World!')

var f1=document.forms.f1;
var nome=f1.nome;
var email=f1.email;
var assunto=f1.assunto;
var oferta=f1.ofertas
console.log(oferta);

assunto.onchange=function(){
    console.log(this.value);
}

document.querySelector('#btConfirma').onclick=function(){
    if(nome.value == ''){
        alert('O nome é obrigatório');
    }
    else if(email.value== ''){
        alert('O campo e-mail é obrigatório');
    }
    else if(oferta.checked == false){
        alert('Você precisa aceitar nossos termos!');
    }
    else if(assunto.selectedIndex == 0){
        alert('escolha um assunto válido');
    }
    else if(document.querySelector('#f1 textarea').value.length<10){
        alert('Isso não parece um comentário!');
    }
    else{
        f1.submit();
    }
    }