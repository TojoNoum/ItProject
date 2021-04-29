
$(document).ready(function(){
    $("#id-img").click(function(){
        $("#id-p").hide("slow", function(){
            alert("Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci\n" +
                "                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat\n" +
                "                voluptatem.");
        });
    });

    $("#id-h1").click(function(){
        $("#id-header")
            .animate({width: "-=20%"},2000)
            //Cette animation se lance immédiatement
            .animate({fontSize: "20px"},{queue:false, duration:2000})
            .fadeTo(2000, 0.5);
    });
});



