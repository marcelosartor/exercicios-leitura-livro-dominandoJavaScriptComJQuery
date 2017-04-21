$(function(){
    var lastClicked;

    $(".tarefa-delete").click(onTarefaDeleteClick);
    $(".tarefa-item").click(onTarefaItemClick);
    $('#tarefa').keydown(onTarefaKeydown);


    /* Incluir tarefa */
    function onTarefaKeydown(event){
        if(event.which === 13){
            addTarefa($('#tarefa').val());
            $('#tarefa').val("");
        }
    }

    function addTarefa(text){

        var tarefa = $('<div />')
                .addClass('tarefa-item')
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
    }



    /* Excluir Tarefa */
    function onTarefaDeleteClick(){
        //console.log("Adeus mundo cruel!");
        //console.log($(this).parent('.tarefa-item').text().trim());
        $(this).parent('.tarefa-item')
            .off('click')
            .hide('slow',function(){
                $(this).remove();
            })
    }

    /* Editar Tarefa */
    function onTarefaItemClick(){
        var text = $(this).children('.tarefa-texto').text();
        var content = "<input type='text' class = 'tarefa-edit' value ='"+text+"'>";


        if(!$(this).is(lastClicked)){

            if(lastClicked !== undefined){
                savePendingEdition(lastClicked);
            }

            lastClicked = $(this);

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
        tarefa.empty();
        /*
        tarefa.append("<div class='tarefa-texto'>"+text+"</div>")
              .append("<div class='tarefa-delete'></div>")
              .append("<div class='clear'></div>");
        */
        tarefa.append($('<div/>')
                .addClass("tarefa-texto")
                .text(text))
              .append($('<div/>')
                .addClass("tarefa-delete"))
              .append($('<div/>')
                .addClass("clear"));

        $(".tarefa-delete").click(onTarefaDeleteClick);
        tarefa.click(onTarefaItemClick);
    };



    /*------------------------------------------------*/






    /*




    */


})
