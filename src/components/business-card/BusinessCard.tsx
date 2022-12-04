import { BusinessCardProps } from "../../types/types";
import styles from "./BusinessCard.module.scss";

const BusinessCard = ({
  id,
  name,
  description,
  link,
  image,
}: BusinessCardProps) => {
  return (
    <a className={styles.card} href={link}>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={image} alt={name} />
    </a>
  );
};

export default BusinessCard;
