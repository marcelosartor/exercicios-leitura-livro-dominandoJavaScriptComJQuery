$('#tarefa').on('keydown.primeiro',function(){
    console.log("esse é o primeiro evento");
});

$('#tarefa').on('keydown.segundo',function(){
    console.log("esse é o segundo  evento");
});

$('#tarefa').off('keydown.primeiro')
/*
$('#tarefa').keydown(function(evento){
        console.log(evento.which, String.fromCharCode(evento.which));
});

//$('#tarefa').off('keydown');
//$('#tarefa').off();

$('#tarefa').keydown(function(evento){
    if(evento.which === 13){
        console.log("Aqui vamos adicionar nossa tarefa");
    }

});

$('#tarefa').keydown(function(){
    console.log("esse é o primeiro evento");
});
*/
