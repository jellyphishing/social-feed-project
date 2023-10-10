const PostContent = ({ petName, yak }) => {
  return (
    <div>
      <h4>{petName}</h4>
      <div>
        <div>
          <span>Yak:</span>
          <span>{yak}</span>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
