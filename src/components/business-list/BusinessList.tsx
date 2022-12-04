import { BusinessListProps } from "../../types/types";
import BusinessCard from "../business-card/BusinessCard";
import styles from "./BusinessList.module.scss";

const BusinessList = ({ list, callback }: BusinessListProps) => {
  return (
    <div className={styles.container}>
      <h1>
        BusinessList
      </h1>
      {list.map((card) => (
        <BusinessCard callback={callback} key={card.id} {...card} />
      ))}
    </div>
  );
};

export default BusinessList;
