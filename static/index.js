function alerta(){
    alert("HOLA");
    if($(".hola").hasClass("changeColor")){
        $(".hola").removeClass("changeColor");
    }
    else{
        $(".hola").addClass("changeColor");
    }
}

