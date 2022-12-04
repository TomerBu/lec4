import Business from "../../services/business";
import styles from "./BusinessCard.module.scss";

type BusinessCardProps = {
  // hidden: boolean;
} & Business;

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
