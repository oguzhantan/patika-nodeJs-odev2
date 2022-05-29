const posts = [
    {id:1,info:'first post'},
    {id:2,info:'second post'},
    {id:3,info:'third post'}
]

const newPost = {id:4,info:'fourth post'};

const addPost = (newPost) => {
    return new Promise((resolve,reject) => {
        if(newPost)
            {
                posts.push(newPost);
                resolve('New post has been added successfully !');
            }
            else
                reject('New post cannot be added !');
    })
}

const listPosts = (posts) =>{
    return new Promise((resolve,reject) => {
        if(posts){
            posts.map((post) => console.log(post))
        }else{
            reject('Posts cannot be printed !');
        }
    })
}

const process = async() => {
    try {

        let add_Post = await addPost(newPost);
        console.log(add_Post);

        let AllPosts = await listPosts(posts);
        console.log(AllPosts);

    } catch (error) {
        console.log(error)
    }
}

process();