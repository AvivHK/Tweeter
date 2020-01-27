const Renderer = function () {
    const renderPosts = function (posts) {
        $("#posts").empty();
        for (let i = 0; i < posts.length; i++) {
            $("#posts").append(`<div class="post" data-id="${posts[i].id}" id="${posts[i].id}">${posts[i]['text']}</div>`)
            
            let postId= posts[i].id
            for (let j = 0; j < posts[i].comments.length; j++) {
                $('#' +postId).append(`<br>`)
                $('#' +postId).append(`<span class='delete-comment'> X </span>`)
                $('#' +postId).append(`<span class="comment" data-id="${posts[i].comments[j].id}">${posts[i].comments[j].text} </span>`)
            }
            $('#' +postId).append(`<br>`)   
            $('#' +postId).append(`<input class='input' placeholder='comment somthing..'></input>`)
            $('#' +postId).append(`<div class='submit'>Comment<div>`)
            $('#' +postId).append(`<br>`)

            $('#' +postId).append(`<div class="delete">Delete Post</div>`)
        }
    }
    return { renderPosts }
}