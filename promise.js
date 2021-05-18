const posts = [
    { title: 'Post One', body: 'This is post One'},
    { title: 'Post Two', body: 'This is post Two'}
];


function getPosts(){
    setTimeout(() =>{
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                res();
            } else {
                rej('Error: Something Went Wrong')
            }
        }, 2000)
    })
}

// Async Await
// async function init() {
//     await createPost({ title: 'Post Two', body: 'This is post Two' });

//     getPosts()
// }

// init()

//Async await with fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data)
}
fetchUsers()




// createPost({ title: 'Post Three', body: 'This is post Three'})
//     .then(getPosts)
//     .catch(err => console.log(err))

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const Promise3 = new Promise((res, rej) => {
//     setTimeout(res, 2000, 'Goodbye');
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// Promise.all([promise1, promise2, Promise3, promise4]).then(values => console.log(values))