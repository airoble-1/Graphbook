let posts = [
  {
    id: 2,
    text: "Lorem ipsum",
    user: {
      avatar: "./images/avatar1.png",
      username: "Test User",
    },
  },
  {
    id: 1,
    text: "Lorem ipsum",
    user: {
      avatar: "./images/avatar2.png",
      username: "Test User 2",
    },
  },
];

const resolvers = {
  RootQuery: {
    posts(root, args, context) {
      return posts;
    },
  },
  RootMutation: {
    addPost(root, { post, user }, context) {
      const PostObject = {
        ...post,
        user,
        id: posts.length + 1,
      };
      posts.push(PostObject);
      return PostObject;
    },
  },
};

export default resolvers;
