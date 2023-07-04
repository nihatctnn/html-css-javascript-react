import axios from "axios";

//The export default statement ensures that this function is exported as the default. This allows us to import and use this function directly when importing this file in another file.

export default async function getData(userId) {

    // We send an HTTP GET request to retrieve user data and user posts using the axios function.
    // The await keyword indicates that we will wait for the operation to complete and not proceed until we receive the data.

    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + userId);

    const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts/" + userId);


    const userInfo = { ...users, ...posts };  // We create an object called userInfo that combines the user and post data.
    console.log(userInfo)
} 