import { useState } from "react";
import Business from "../../services/business";
import styles from "./AddCard.module.scss";

const AddCard = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  //on click: get the values from the inputs
  const addCardHandler = () => {
    const business = new Business(name, description, image, link);
    console.log(business);
  };
  return (
    <div>
      <h2>Add New Business</h2>

      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Name"
      />
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="Description"
      />
      <input
        value={image}
        onChange={(e) => {
          setImage(e.target.value);
        }}
        type="text"
        placeholder="Image"
      />
      <input
        value={link}
        onChange={(e) => {
          setLink(e.target.value);
        }}
        type="text"
        placeholder="Link"
      />
      <button onClick={addCardHandler} className="btn btn-success">
        Save
      </button>
    </div>
  );
};

export default AddCard;

//TODO: FORM + onInput
//get the values?
//new Business
//callback
