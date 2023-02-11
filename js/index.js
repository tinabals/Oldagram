const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const section = document.querySelector('main');
let index = ""

const  renderPost = () => {
    let sectionContent = ""
    for (let i=0; i < posts.length; i++){
        sectionContent += `
        <section class="section-container">
        <div class="container">
                <div class="user-info-container">
                <img class="avatar-image" src='${posts[i].avatar}' />
                <div class="location-and-name">
                <h3 class="user-fullname"> ${posts[i].name} </h3>
                <p class="location-text"> ${posts[i].location} </p>
                    </div>    
                </div>  
            </div>    
            <div class="post-image-container">  
                <img class="post-image" src='${posts[i].post}'/>
            </div>    
        </section>
        <footer>
            <div class= "container">
            <div class="icons-container">
            <img class="like-icon icon" src='../images/icon-heart.png' />
            <img class="comment-icon icon" src='../images/icon-comment.png' />
            <img class="share-icon icon" src='../images/icon-dm.png' />
            </div>
                    <h3 id="like-count-${i}" onclick='increaseLike()'> ${posts[i].likes} likes </h3>
                    <div class="username-caption">
                    <h3 class="user-name"> ${posts[i].username} </h3>
                    <p class="comments"> ${posts[i].comment} </p>
                    </div>    
                    </div>    
                    </footer>    
                    `
                    index = i
                }
                section.innerHTML = sectionContent
}
console.log(index, "hi")
renderPost()