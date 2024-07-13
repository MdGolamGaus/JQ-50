//JS Code first

//JQ

// Deprecated
// $(document).ready(function(){
//     $('button').click(function(){
//         alert("Welcome!!!");
//     })
// });
//Example-1
$(document).ready(function(){
    $('#exam1').on("click",function(){
        alert("Welcome!!!");
    })
});
//Example-2
$(document).ready(function(){
    $('#d_text').on("click",function(){
        $(this).hide();
    })
});
//Example-3
$(document).ready(function(){
    $('.d_class').on("click",function(){
        $(this).hide();
    })
});
//Example-4
$(document).ready(function(){
    $('#btn_t').on("click",function(){
        $('#t_sh').toggle();
    })
});
//Example-5
$(document).ready(function(){
    $('#fade_btn').on("click",function(){
        $('#f_in').fadeToggle();
    })
});
//Example-6
$(document).ready(function(){
    $('#fadein_btn').on("click",function(){
        $('#f_inout').fadeIn();
    })
});
//Example-7
$(document).ready(function(){
    $('#fadeout_btn').on("click",function(){
        $('#f_inout').fadeOut();
    })
});
//Example-8
$(document).ready(function(){
    $('#fadefast_btn').on("click",function(){
        $('#f_inoutfs').fadeIn("fast");
    })
});
//Example-9
$(document).ready(function(){
    $('#fadeslow_btn').on("click",function(){
        $('#f_inoutfs').fadeOut("slow");
    })
});
//Example-10
$(document).ready(function(){
    $( "li.item-i" ).find( "li" ).css( "background-color", "yellow" );
});
//Example-11
$(document).ready(function(){
    $( "div.demo-container" ).html();
});
//Example-12
$(document).ready(function(){
    $( "p" ).last().addClass("selected highlight");
});
//Example-13
$(document).ready(function(){
$( "div" ).on( "click", function() {
    var html = [ "The clicked div has the following styles:" ];
   
    var styleProps = $( this ).css([
      "width", "height", "color", "background-color"
    ]);
    $.each( styleProps, function( prop, value ) {
      html.push( prop + ": " + value );
    });
   
    $( "#result" ).html( html.join( "<br>" ) );
  });
});
//Example-14
$(document).ready(function(){
    $( "td:eq( 1 )" ).css( "color", "red");
    });

//Example-15
$(document).ready(function(){
    $( "li:eq( -2 )" ).css( "color", "red");
    });
    
