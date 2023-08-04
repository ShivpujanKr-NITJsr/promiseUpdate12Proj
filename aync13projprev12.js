const posts=[
    { title: 'Post One',body:'This is post one'},
    { title: 'Post Two',body:'This is post two'}

];

function getPosts(){
    setTimeout(()=>{
        // let output='';

        posts.forEach((post,index)=>{
            // output+=`<li>${post.title}</li>`;
            console.log(post)
        });

        // document.body.innerHTML=output;
    },1000);
}

function createPost(post){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            
            resolve()


        },2000)
    });
    
}

function deleteLastPost(){
    setTimeout(()=>{
        posts.pop();
    },1000)
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(new Date())
            resolve();
        },1000)
    })
}

async function funt(){
    const creating =await createPost({title: 'Post Three',body:'This is post three'})
    await getPosts()
    await updateLastUserActivityTime()
    await deleteLastPost();
    await getPosts();
    await updateLastUserActivityTime();

}




