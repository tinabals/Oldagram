let posts = [
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
let liked = false
let count = 0


const  renderPost = () => {
  const storedPosts = JSON.parse(localStorage.getItem("postsArray"));
  if (storedPosts){
    posts = storedPosts
  }
    let sectionContent = ""
    for (let i=0; i < posts.length; i++){
        sectionContent += `
        <section class="section-one">
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
        <section class="section-container-two ${i !== posts.length - 1 ? "border-bottom" : " "}">
            <div class= "container">
            <div class="icons-container">
            <img ondblclick="increaseLike(${i})" class="like-icon-${i} icon" src='../images/icon-heart.png' />
            <img class="comment-icon icon" src='../images/icon-comment.png' />
            <img class="share-icon icon" src='../images/icon-dm.png' />
            </div>
                    <h3 class="like-count" > ${posts[i].likes} likes </h3>
                    <div class="username-caption">
                    <h3 class="user-name"> ${posts[i].username} </h3>
                    <p class="comments"> ${posts[i].comment} </p>
                    </div>    
                    </div>    
            </section>    
                    `
                 
                }
                section.innerHTML = sectionContent
            }

            /* first method to increase like */
         
        // const increaseLike = (el) => {
        //         const iconHeart = document.querySelector(`.like-icon-${el}`)
        //         const likeCount = document.querySelectorAll(".like-count")[el];
        //         if (iconHeart.src.endsWith("icon-heart.png")){
        //             iconHeart.src = '../images/heart.png'
        //             posts[el].likes++  
        //         }
        //         else{
        //             iconHeart.src='../images/icon-heart.png'
        //             posts[el].likes--
        //         }
        //         likeCount.innerHTML = `${posts[el].likes} likes`
        //         localStorage.setItem("postsArray", JSON.stringify(posts))
        //     }
       

/* Second methods but i prefer this more */

        // const increaseLike = (el) => {
        //         const iconHeart = document.querySelector(`.like-icon-${el}`)
        //         const likeCount = document.querySelectorAll(".like-count")[el];
        //         if (count === 0){
        //             count++
        //             iconHeart.src = '../images/heart.png'
        //             posts[el].likes++  
        //             likeCount.innerHTML = `${posts[el].likes} likes`
        //         }
        //         else{
        //             iconHeart.src='../images/icon-heart.png'
        //             posts[el].likes--
        //             likeCount.innerHTML = `${posts[el].likes} likes`
        //             count = 0
                
        //         }
        //         localStorage.setItem("postsArray", JSON.stringify(posts))
        //     }

           

            /* Third method */

     const increaseLike = (el) => {
                let image = null
                liked = !liked
                const iconHeart = document.querySelector(`.like-icon-${el}`)
                const likeCount = document.querySelectorAll(".like-count")[el];
                if (liked){
                    iconHeart.src = '../images/heart.png'
                    image = iconHeart.src = '../images/heart.png'
                    posts[el].likes++  
                    likeCount.innerHTML = `${posts[el].likes} likes`
                    liked = true
                }
                else{
                    iconHeart.src='../images/icon-heart.png'
                    image = iconHeart.src='../images/icon-heart.png'
                    posts[el].likes--
                    likeCount.innerHTML = `${posts[el].likes} likes`
                    liked = false      
                }
                localStorage.setItem("postsArray", JSON.stringify(posts))
                // localStorage.setItem("image", image)
            }

            renderPost()

