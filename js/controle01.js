console.log('Hell World!')

var foto1=document.querySelector('.foto1')
var titulo=document.querySelector('h1');
var msg01=document.querySelector('#msgJs01 button')
var j=0

    // function
    function mostraImagem(){
        if(j<=2){

        setTimeout(function(){
        j++;
        console.log(j);
        document.querySelector('.foto'+j).style.opacity='1';
        mostraImagem();
        },1000);
        }
    }
    // Mouseover
    titulo.onmouseover=function(){
        document.querySelector('#msgJs01').style.display="block";
        document.querySelector('#msgJs01').style.opacity="1";
    }
    // click
    msg01.onclick=function(){
        document.querySelector('#msgJs01').style.opacity="0";
        mostraImagem();

    }

    // Data Hora
    var tempo=new Date();
    var saudacao=document.querySelector('header p');
    var msgSemana= document.querySelector('#semana');
    var dia=tempo.getDate();
    var mes=tempo.getMonth();
    var semana=tempo.getDay();
    var ano=tempo.getFullYear();
    var diaDaSemana= ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    var mesDoAno=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setempo','Outubro','Novembro','Dezembro'];

    diaDaSemana[semana] != 'Domingo' && diaDaSemana[semana] != 'Sábado' ? diaDaSemana[semana] = diaDaSemana[semana]+'-Feira': null;

    // clearInterval(exibeRelogio)
    var exibeRelogio=setInterval(function(){
        timer();
    },1000);
    
    function timer(){
    // Relógio e Dia da semana
    var horario=new Date();
    var hora,minutos,segundos,relogio;
    hora=horario.getHours();
    minutos= horario.getMinutes()
    segundos=horario.getSeconds();
    hora<10 ? hora='0'+hora : null;
    minutos<10 ? minutos='0'+minutos : null;
    segundos<10 ? segundos='0'+segundos : null;
    relogio=hora+ ':' +minutos+ ':'+ segundos;
    msgSemana.innerHTML=diaDaSemana[semana]+' - '+relogio;
    }
    // executa a função ao carregar a pág
    timer();

    dia<10 ? dia='0'+dia : null;
    saudacao.innerHTML ='São Paulo, ' + dia + ' de ' + mesDoAno[mes] + ' de ' + ano;
    
    // Troca de Imagens
    var foto,btbr,bteua,btfr,btjp;
    foto=document.querySelector('.boxImg02 img');
    bteua=document.querySelector('#bteua');
    btbr=document.querySelector('#btbr');
    btfr=document.querySelector('#btfr');
    btjp=document.querySelector('#btjp');

    // bteua.onclick=function(){
    //     foto.src='../imagens/paises/EUA.jpg'
    // }
    // btbr.onclick=function(){
    //     foto.src='../imagens/paises/Brasil.jpg'
    // }
    // btfr.onclick=function(){
    //     foto.src='../imagens/paises/França.jpg'
    // }
    // btjp.onclick=function(){
    //     foto.src='../imagens/paises/Japão.jpg'
    // }

    var paises=['Brasil.jpg','EUA.jpg','França.jpg','Japão.jpg'];
    var btPaises=document.querySelectorAll('.boxBt02 .btn');
        btPaises.forEach(function(obj,index){
        obj.onclick=function(){
            // console.log(this,index);
            btPaises[btOld].style.backgroundColor='cornflowerblue';
            foto.src='../imagens/paises/'+paises[index];
            btOld=index;
            btPaises[index].style.backgroundColor='green';

        }
    })
    // Exibir uma das fotos sorteada ao carregar a página
    var sorteio=parseInt(Math.random()*paises.length);
    var btOld=sorteio
    foto.src='../imagens/paises/'+paises[sorteio];
    btPaises[sorteio].style.backgroundColor='green';
    // console.log(sorteio);

    // =====================================================
    // Sorteio dos dados
    var d1,d2,resDados,parImpar,sorteiaD1,sorteiaD2,btJogo
    d1=document.querySelector('#d1');
    d2=document.querySelector('#d2');
    resDados=document.querySelector('#resDados');
    parImpar=document.querySelector('#parImpar');
    btJogo=document.querySelector('#btJogo')

    function jogosDosDados(){
    sorteiaD1=parseInt(Math.random()*6)+1;
    sorteiaD2=parseInt(Math.random()*6)+1;
    // console.log(sorteiaD1,sorteiaD2);
    d1.style.backgroundImage='url(../imagens/misc/d'+sorteiaD1+'.png)';
    d2.style.backgroundImage='url(../imagens/misc/d'+sorteiaD2+'.png)';
    // recebe a soma
    resDados.style.fontSize='6vh';
    resDados.innerHTML=sorteiaD1+sorteiaD2
    parImpar.style.fontSize='6vh';
    (sorteiaD1+sorteiaD2)%2 == 0 ? parImpar.innerHTML="PAR" : parImpar.innerHTML="ÍMPAR"
    }

    jogosDosDados();
    btJogo.onclick=function(){
        jogosDosDados();
    }

    // ==========================
    // Galeria de Imagens
    var boxGaleria,n,boxGaleria_marcador;
    boxGaleria=document.querySelector('.boxJs04')
    boxGaleria_marcador=document.querySelector('.boxJs05')

    var legenda=['','Magnífico','Incrível','Magnânimo','estupendo'];
    
    function galeria(){
        for(var i=1;i<=20;i++){
            var img=new Image();
            i<10 ? n='0'+i : n=i
            img.src='../imagens/galeriaPref/nature'+ n +'.jpg';
            img.classList.add('w-25');
            boxGaleria.appendChild(img);
        }
    }

    galeria();

    function galeria_marcador(){
        for(var i=1;i<legenda.length;i++){
            var img=new Image();
            var div=document.createElement('div');
            div.style.position='relative';
            var span=document.createElement('span');
            span.classList.add('faixa');
            span.innerHTML=legenda[i];
            i<10 ? n='0'+i : n=i
            img.src='../imagens/galeriaPref/nature'+ n +'.jpg';
            img.classList.add('w-100');
            div.classList.add('w-50');
            div.appendChild(span);
            div.appendChild(img)
            boxGaleria_marcador.appendChild(div);
        }
    }

    galeria_marcador();