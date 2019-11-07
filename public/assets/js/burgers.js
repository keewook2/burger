$(function() {
    $(".devour_btn").on("click",function(event){
        var id = $(this).data("id");
        var devoured = $(this).data("devour");

        var devourState = {
            devoured: devoured
        };

        $.ajax("api/burgers/"+id,{
            type: "PUT",
            data: devourState
        }).then(function(){
            console.log("changed the state of devour");
            location.reload();
        })
    })
})