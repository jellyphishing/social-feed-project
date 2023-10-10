import PostContent from "../PostContent/PostContent";
const PostList = ({ postObj }) => {
  const postItems = postObj.map((post) => <PostContent postObj={post} />);
  return (
    <div>
      <h4>Yaks</h4>
      <div>{postItems}</div>
    </div>
  );
};

export default PostList;
