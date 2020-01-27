const Tweeter = function () {
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postsIdCounter = "p3";
    let commentIdCounter = "c7";

    const getPosts = () => posts;

    const addPost = function (text) {
        posts.push({ text: text, id: postsIdCounter,  comments: [] })
        postsIdCounter = "p" + (parseInt(postsIdCounter[1].substring(1)) + 1)
    }

    const removePost = function (postId) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id == postId) {
                posts.splice(i, 1);
            }
        }
    }

    const addComment = function (theComment,postId) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id == postId) {
                posts[i].comments.push({id: commentIdCounter,text: theComment })
                commentIdCounter = "c" + (parseInt(commentIdCounter.substring(1)) + 1)

            }
        }
    }

    const removeComment = function (postId,commentId) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id == postId) {
                for (let j = 0; j < posts[i].comments.length; j++) {
                    if (posts[i].comments[j].id == commentId)
                        posts[i].comments.splice(j, 1)
                }
            }
        }
    }
    return { getPosts, addPost, removePost, addComment, removeComment }

}



