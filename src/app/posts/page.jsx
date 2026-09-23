

// const postsPromise = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');

import Context from "./Context";


//     return res.json();
// }

export const metadata = {
    title: 'Posts Page',
    description: 'This is Posts Page',
}

const getPosts = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                cache:'force-cache'
            }
        );
        if (!res.ok) {
            throw new Error('Data fail korse');
        }
        return res.json();
    } catch (err) {
       throw err;
    }
}


const PostsPage = async () => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();


    // const posts = await postsPromise();
    // console.log(posts);

    const posts = await getPosts();

    return (
        <>
            <div className="text-center mt-10 space-y-5">
                <h1 className=" text-5xl font-bold ">Posts Page</h1>
                <span><b>Total Posts:</b>{posts.length}</span>
            </div>
            <Context></Context>
        </>
    );
};

export default PostsPage;