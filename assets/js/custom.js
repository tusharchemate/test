$(document).ready(function () {

    $.validator.setDefaults({
        submitHandler: function () {

            // $result.html("You Successfully Subscribe Our News Letter :)");
            $('#result').html('<div class="alert alert-success alert-dismissible fade show"><a class="close" data-dismiss="alert"><h3 class="font-weight-bold">×</h3></a><span></span><h4>"Your Response Recorded"</h4></div>')

        }
    });

    $('#signupForm').validate({

        rules: {
            username: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            }
        },

        messages: {
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 5 characters"
            },
            email: "Please enter a valid email address",
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `invalid-feedback` class to the error element
            error.addClass("invalid-feedback");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });

});
$(document).ready(function () {
    $('.circlechart').circlechart();
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
         loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
    
        }
    })

});

var owl = $('.owl-carousel');
owl.owlCarousel();

$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.owl-prev').click(function() {
    
    owl.trigger('prev.owl.carousel');
})




