// function alertinha(){
//     window.alert("Vamos nos tornar dev em 2023!");
// }

// DOM -> Modelo de documento de objeto.

let menu = document.getElementById("menu");

function mostrarMenu(){
    // ações
    // Se, o meu MENU não estiver aparecendo, ele irá aparecer
    if(menu.style.display == "none"){
        
        menu.style.display = "flex";
    }else{
        //Então, se o meu menu estiver aparecendo, ele irá desaparecer
        menu.style.display = "none";
    }

    // == - igual
    // = - semelhante
}

// USANDO O JQUERY:

$(document).ready(function(){
// Ações/funções que serão iniciadas assim que a tela iniciar
    // alert("usando o jquery");
    $("#barras").click(function(){
        // if($("#menu").hasClass("menu-ativo")){
        //     $("#menu").removeClass("menu-ativo");
        // }else{
        //     $("#menu").addClass("menu-ativo");
        // }
        $("#menu").toggleClass("menu-ativo");
    });

    $("#carrossel img:eq(0)").addClass("banner-ativo").show();
    
    setInterval(slide, 1000);

    function slide(){
        // Se existir uma próx imagem
        if($(".banner-ativo").next().length){ 
            // A imagem deixará de aparecer, para que a próxima apareça
            // console.log("retornou!");
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show();
        }else{
            $(".banner-ativo").removeClass().hide();
            $("#carrossel img:eq(0)").addClass("banner-ativo").show();
        }
    }


    



    

});
