const { sayHello, addPost, deletePost } = require("@/lib/action");

const ServerActionTestPage = async () => {
  return (
    <div>
      <form action={addPost} method="post">
        <input type="text" placeholder="title" name="title" required />
        <input type="text" placeholder="desc" name="desc" required />
        <input type="text" placeholder="slug" name="slug" required />
        <input type="text" placeholder="userId" name="userId" required />
        <button type="submit">Create</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="postId" name="id" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
