import axios from "axios";

const getData = async (userId) => {
    try {
        //fetch user data
        const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

        //fetch posts 
        const { data: posts } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        //create new user object with posts
        const newUserObj = { ...user, posts };

        return newUserObj;
    }
    catch (err) {
        console.log(err.message);
    }
}

export default getData;