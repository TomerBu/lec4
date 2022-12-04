import { BusinessCardProps } from "../../types/types";
import styles from "./BusinessCard.module.scss";
import { FaTrashAlt } from "react-icons/fa";

const BusinessCard = ({
  callback,
  id,
  name,
  description,
  link,
  image,
}: BusinessCardProps) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={image} alt={name} />
      <a href={link}>Visit Us</a>
      <hr />
      <button
        onClick={() => {
          callback(id);
        }}
        className="btn btn-info"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default BusinessCard;
