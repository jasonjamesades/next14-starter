import styles from "./postUser.module.css"
import {getUser} from"@/lib/data";
//FETCH DATA WITH AN API
// const getDAta = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"});
  
//     if (!res.ok) {
//       throw new Error("Something went wrong");
//     }
//     return res.json();
//   };



const PostUser = async({userId}) => {
//FETCH DATA WITH AN API
   //const user = await getDAta(userId);

   //FETCH DATA WITHOUT AN API
   const user = await getUser(userId);
   console.log("User: ", user)

  return (
    <div className={styles.container}>
      <span className={styles.author}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  );
};

export default PostUser;
