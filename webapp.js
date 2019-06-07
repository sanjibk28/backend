
	
	
$(document).ready(function() {
    
	$("#firstCan").on('click', function() {
        $("#firstG").toggleClass("toggle");
    });
	$("#shut1").on('click', function() {
        $("#firstG").toggleClass("toggle");
    });
		$("#secondCan").on('click', function() {
        $("#secondG").toggleClass("toggle");
    });
	$("#shut2").on('click', function() {
        $("#secondG").toggleClass("toggle");
    });	
		$("#thirdCan").on('click', function() {
        $("#thirdG").toggleClass("toggle");
    });
	$("#shut3").on('click', function() {
        $("#thirdG").toggleClass("toggle");
    });
	
	
	$("#btn_barrel").on('click', function() {
        $("#barrel_modal").toggleClass("pop_up_toggle");
    });

    $("#btn_chamber").on('click', function() {
        $("#chamber_modal").toggleClass("pop_up_toggle");
    });

    $("#btn_projectile").on('click', function() {
        $("#projectile_modal").toggleClass("pop_up_toggle");
    });

    $("#btn_propellant").on('click', function() {
        $("#propellant_modal").toggleClass("pop_up_toggle");
    });

    $("#btn_dynamics").on('click', function() {
        $("#dynamics_modal").toggleClass("pop_up_toggle");
    });


    $("#btn_constants").on('click', function() {
        $("#constants_modal").toggleClass("pop_up_toggle");
    });
	
	
    $(".input_close_button").on("click", function() {
        $(".custom_modal").addClass("pop_up_toggle");
    });
	
	$(".close").on("click", function() {
        $(".custom_modal").addClass("pop_up_toggle");
    });
		
	$("#barrel_short").on('click', function() {
        $("#barrel_modal").toggleClass("pop_up_toggle");
    });
	    $("#chamber_short").on('click', function() {
        $("#chamber_modal").toggleClass("pop_up_toggle");
    });

    $("#project_short").on('click', function() {
        $("#projectile_modal").toggleClass("pop_up_toggle");
    });

    $("#prop_short").on('click', function() {
        $("#propellant_modal").toggleClass("pop_up_toggle");
    });

    $("#dyna_short").on('click', function() {
        $("#dynamics_modal").toggleClass("pop_up_toggle");
    });


    $("#const_short").on('click', function() {
        $("#constants_modal").toggleClass("pop_up_toggle");
    });


	$("#run").on("click",function() {
        $("#bullet").toggleClass("bullet_animation");
        var innp = create_input_json();
        console.log(innp);
    })
	
	
});