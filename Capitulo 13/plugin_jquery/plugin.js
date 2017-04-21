;(function($){


    var validaCpf = function(text){

        console.log("Entrou na ValidaCpf...");

        text = text.replace(/\D/g,"");
        if(text.length !== 11){
            console.log("Quantidade : ",text.length);
            return false;
        }

        var digitos = [];
        for(var pos = 0; pos < text.length; pos++){
            digitos[pos] = text.charCodeAt(pos)-48;
        }

        var soma = 0;
        for(var pos = 0; pos < 9; pos++){
            soma += digitos[pos] * (10-pos);
        }

        var primeiroDigito = 11-(soma %11);
        if(primeiroDigito>9){
            primeiroDigito = 0;
        }
        if(digitos[9] !== primeiroDigito){
            return false;
        }

        soma = 0;
        for(var pos = 0; pos < 10; pos++){
            soma += digitos[pos] * (11-pos);
        }
        var segundoDigito = 11-(soma %11);
        if(segundoDigito>9){
            segundoDigito = 0;
        }

        return digitos[10] === segundoDigito;

    }

    $.fn.validador = function(options){

        console.log("Entrou no Validador...");

        var init = function(){
            var element = $(this);
            var settings = $.extend({
                "function" : validaCpf
            },options);

            var isValid = function(text){
                return settings["function"](text);
            }

            var onElementBlur = function(){
                var text = element.val();

                console.log("text :",text);
                console.log("text isvalid :",isValid(text));

                if(isValid(text)){
                    element.removeClass("erro");
                    element.addClass("valido");
                }else {
                    element.removeClass("valido");
                    element.addClass("erro");
                }
            }

            //element.on("blur.validador",onElementBlur);
            element.on("blur.validador",onElementBlur);
        }


        return this.each(init);

    }



})(jQuery);
