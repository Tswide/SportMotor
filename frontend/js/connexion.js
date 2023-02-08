$(document).ready(function() {
    $(".buttonConnexion").hide();
    $(".popup").hide();

    //Verirification des champs si ils sont bien remplie
    $('.email, .password').on('keyup', function() {
        if($('.email').val().length > 0 && $('.password').val().length > 0) {
            $(".buttonConnexion").show();
            $(".popup").hide();
        } else {
            $(".buttonConnexion").hide();
            $(".popup").show();
            $(".popup").html(`<p>Veuillez remplire les champs</p>`);
        }
    });

    //Changement de page entre connexion et inscription    
    $('.buttonNav').on('click', function() {
        //ajout et suppression de la class active
        $('.buttonNav').removeClass("active");
        $(this).addClass('active');

        //récupération de l'information data-filter
        let filter = $(this).data('filter');
        console.log(filter);

        //si la case ne contient pas filter alors ajout de .hide
        $(".filter").each(function() {
            if (!$(this).hasClass(filter)) {
                $(this).addClass('hide');
            } else {
                $(this).removeClass('hide');
            }
        });
    });
    
    //Verification des identifiant + saveCookie
    $(".buttonConnexion").on("click", function(e) {
        e.preventDefault();
        $.post('../json/user.json', function(data) {
            $.each(data, function(k,user) {
                console.log(user.email)
                if($(".email").val() == user.email){
                    if($(".password").val() == user.password){
                        window.location.assign("../pages/market.html")
                        return false;
                    }else {
                        $(".popup").show();
                        $(".popup").html(`<p>Votre mot de passe est incorrecte</p>`);
                    }
                } else {
                    $(".popup").show();
                    $(".popup").html(`<p>Votre email est incorrecte</p>`);
                }
            });
        });
    });

    $(".buttonInscription").on("click", function(e) {
        let jsondata = {
            "action" : "ajouter",
            "name" : $(".nameI").val(),
            "email" : $(".emailI").val(),
            "password" : $(".passwordI").val()
        }
        if($('.nameI').val().length > 0 && $('.emailI').val().length > 0 && $('.passwordI').val().length > 0){
            $('popup').show();
            $('popup').html("Veuillez remplire toutes les champs");
        } else {
            $.post("../api/api.php", jsondata, function(){
            });
        }
    });
});

// $.post('../../backend/api/api.php', function(data) {
//     r = JSON.parse(data);
//     $.each(r, function(k,user) {
//         if(email == user.email && password == user.password){
//             //enregistre le cookie
//         } else {
//             $(".popup").show();
//             $(".popup").html(`<p>Votre email ou mot de passe est incorrecte</p>`);
//         }
//     });
// });
