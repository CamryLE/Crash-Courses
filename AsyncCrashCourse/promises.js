// let m= 1

// var foo = function (PI, n){
//     return PI * m * n;
// };
// console.log(foo(Math.PI, 5));

// console.log(n)

const posts = [
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'}
];

function getPosts () {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        } )
        document.body.innerHTML = output
    }, 1000)
}

function createPost (post,k) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong')
            }
        },2000)
    })
}

// createPost ({ title: 'Post Three,', body: 'This is post Three'}).then(getPosts).catch(err => console.log(err))
    

// Async / Await
// async function init () {
//     await createPost ({ title: 'Post Three,', body: 'This is post Three'})
// //waits for createpost to be dont to get posts
//     getPosts()
// }

// init()


// Async / Await / Fetch
// async function fetchUsers() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await res.json()
    
//     console.log(data)
// }

// fetchUsers()

//Promise.All
// const promise1 = Promise.resolve('Hello World')
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, 'Goodbye'))

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))

