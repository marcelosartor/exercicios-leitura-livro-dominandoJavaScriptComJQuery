$(function(){
    var meu_login = "marcelo.msartor@gmail.com";
    //var meu_login = "seu@email.com";
    var server = "http://livro-capitulo07.herokuapp.com";

    var lastClicked;


    /* Gravar uma nova tarefa */
    function newTarefa(text, div){
        console.log("newTarefa");
        var novaTarefa = $.post(server+"/tarefa" ,
            {
                usuario:meu_login,
                texto : text,
                _method: "PUT"
            }
        );

        novaTarefa.done(function(data){
            console.log("newTarefa.done");
            div.text(data.id);
        });

        novaTarefa.fail(function(){
            console.log("Algo deu muito errado.");
        });
    }



    /* Incluir tarefa */
    function onTarefaKeydown(event){
        if(event.which === 13){
            addTarefa($('#tarefa').val());
            $('#tarefa').val("");
        }
    }

    function addTarefa(text,id){

        id = id || 0;

        var tarefa = $('<div />')
                .addClass('tarefa-item')
                .append($("<div />")
                    .addClass("tarefa-id")
                    .text(id))
                .append($('<div />')
                    .addClass('tarefa-texto')
                    .text(text))
                .append($('<div />')
                    .addClass('tarefa-delete')
                    )
                .append($('<div />')
                    .addClass('clear'));

        $('#tarefa-list').append(tarefa);
        $(".tarefa-delete").click(onTarefaDeleteClick);
        $(".tarefa-item").click(onTarefaItemClick);

        if( id === 0){
            var div = $(tarefa.children(".tarefa-id"));
            console.log("id ",div);
            newTarefa(text,$(div));
        }
    }

    /* Atualizar a Tarefa no banco */
    function updateTarefa(text,id){
        $.post(server+"/tarefa",{tarefa_id: id, texto: text});
    }


    /* Excluir Tarefa */
    function onTarefaDeleteClick(){
        $(this).parent('.tarefa-item')
            .off('click')
            .hide('slow',function(){
                _this = $(this);
                $.post(server+"/tarefa",
                    {
                        usuario:meu_login,
                        tarefa_id : _this.children(".tarefa-id").text(),
                        _method: "DELETE"
                    }
                );
                $(this).remove();
            })
    }

    /* Editar Tarefa */
    function onTarefaItemClick(){

        if(!$(this).is(lastClicked)){

            if(lastClicked !== undefined){
                savePendingEdition(lastClicked);
            }

            lastClicked = $(this);

            var text = $(this).children('.tarefa-texto').text();
            var id   = lastClicked.children('.tarefa-id').text();

            var content = "<div class='tarefa-id'>" + id +"</div>" +
            "<input type='text' class = 'tarefa-edit' value ='"+text+"'>";


            lastClicked.html(content);

            $(".tarefa-edit").keydown(onTarefaEditKeydown);
        }
    }

    function onTarefaEditKeydown(event){
        if(event.which === 13){
            savePendingEdition(lastClicked);
            lastClicked = undefined;
        }
    }

    function savePendingEdition(tarefa){
        var text = tarefa.children('.tarefa-edit').val();
        var id = tarefa.children('.tarefa-id').text();
        tarefa.empty();
        /*
        tarefa.append("<div class='tarefa-texto'>"+text+"</div>")
              .append("<div class='tarefa-delete'></div>")
              .append("<div class='clear'></div>");
        */
        tarefa.append($('<div.>')
                .addClass("tarefa-id")
                .text(id))
              .append($('<div/>')
                .addClass("tarefa-texto")
                .text(text))
              .append($('<div/>')
                .addClass("tarefa-delete"))
              .append($('<div/>')
                .addClass("clear"));

        updateTarefa(text,id);

        $(".tarefa-delete").click(onTarefaDeleteClick);
        tarefa.click(onTarefaItemClick);
    };

    function loadTarefas(){
        $("#tarefa").empty();

        var msJson = $.getJSON(server + "/tarefas", {usuario : meu_login});
        msJson.done(function(data){
            console.log("data :",data);
            for(var tarefa = 0; tarefa < data.length ; tarefa++){
                addTarefa(data[tarefa].texto, data[tarefa].id);
            }
        });

    };


    /*------------------------------------------------*/

    $(".tarefa-delete").click(onTarefaDeleteClick);
    $(".tarefa-item").click(onTarefaItemClick);
    $('#tarefa').keydown(onTarefaKeydown);

    loadTarefas();

})
