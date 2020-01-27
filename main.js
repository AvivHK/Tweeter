const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())



$("#post").on("click", function(){
    tweeter.addPost($("#container").find("input").val())
    $("#container").find("input").val('')
    renderer.renderPosts(tweeter.getPosts())
})

$("div").on("click",".delete" ,function(){
    tweeter.removePost($(this).closest(".post").attr("id"))
    renderer.renderPosts(tweeter.getPosts())
})

$("div").on("click",".submit",function(){
    tweeter.addComment($(this).siblings("input").val(),$(this).closest(".post").attr("id"))
    renderer.renderPosts(tweeter.getPosts())
})

$("div").on("click",".delete-comment",function(){
    tweeter.removeComment($(this).closest(".post").attr("id"), $(this).siblings(".comment").data("id"))
    renderer.renderPosts(tweeter.getPosts())
})
