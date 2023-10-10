const PostList = ({}) => {
  const posts = ["Charlie", "Copper", "Guinness"];
  const postItems = posts.map((post) => <div>{post}</div>);
  return (
    <div>
      <h4>Yaks</h4>
      <div>{postItems}</div>
    </div>
  );
};

export default PostList;
