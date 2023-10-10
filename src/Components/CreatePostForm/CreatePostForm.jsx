import React, { useState } from "react";
import TextField from "../TextField/TextField";

const CreatePostForm = ({ onNewPost }) => {
  const [petName, setPetName] = useState("");
  const [yak, setYak] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    const formData = {
      petName,
      yak,
    };
    onNewPost(formData);
  };

  return (
    <form onPost={handlePost} className="flex-item">
      <h4>Add Post</h4>
      <TextField label="PetName" value={petName} onChange={setPetName} />
      <TextField label="Yak" value={yak} onChange={setYak} />
    </form>
  );
};
export default CreatePostForm;
