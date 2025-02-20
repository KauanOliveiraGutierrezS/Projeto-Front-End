// A variavel $ é a variavel de acesso
$().ready(function(){
    console.log('Jquery Funfando');
    $('section p').css({
        'color': 'blue'
    })

    $('section p').eq(1).css({
        'color':'brown',
        'font-weight':'700'
    })//end css

    $('section p').on({
        mouseenter: function(){
            $(this).css({
                'background-color':'khaki',
                'cursor':'ponter'
            })
        },
        mouseleave: function(){
            $(this).css({
                'background-color':'#fff'
            })
        },
        click: function(){
            $(this).css({
                'border':'1px solid #999',
                'padding':'1px'
            })
        }
    })//end on
    // Exemplo 09
    $('#img01').hide();
    $('#btfade').css({
        'cursor':'pointer'
    })
    $('#btfade').click(function(){
        $('#img01').fadeToggle(2000)
    })
    // exemplo 10
    $('#img02').hide();
    $('#btslide').css({
        'cursor':'pointer'
    })
    $('#btslide').click(function(){
        $('#img02').slideToggle(1500);
    })

})//end ready