import PostContent from "../PostContent/PostContent";
const PostList = ({ postObj }) => {
  const postItems = postObj.map((post) => <PostContent postObj={post} />);
  return (
    <div>
      <h3>Yaks</h3>
      <div>{postItems}</div>
    </div>
  );
};

export default PostList;
