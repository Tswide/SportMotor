$(document).ready(function() {
    $(".button").hide();
    $(".popup").hide();

    //Verirification des champs si ils sont bien remplie
    $('.email, .password').on('keyup', function() {
        if($('.email').val().length > 0 && $('.password').val().length > 0) {
            $(".button").show();
            $(".popup").hide();
        } else {
            $(".button").hide();
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
    $(".buttonConnexion").on("click", function() {
        $.post('../../backend/json/user.json', function(data) {
            let emailVal = $(".email").val();
            let passwordVal = $(".password").val();

            $.each(data, function(k,user) {
                console.log(user.email);
                console.log(emailVal);
                if(emailVal == user.email){
                    if(passwordVal == user.password){
                        // $("#loginform").submit();
                        // //saveCookie
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
