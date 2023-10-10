import "./PostContent.css";

const PostContent = ({ postObj }) => {
  return (
    postObj && (
      <div className="flex-item">
        <h4>{postObj.petName}</h4>
        <div>
          <div className="data-item">
            <span>Yak: </span>
            <span>{postObj.yak}</span>
          </div>
        </div>
        <button></button>
      </div>
    )
  );
};

export default PostContent;
