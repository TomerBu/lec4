import { BusinessCardProps } from "../business-card/BusinessCard";
import styles from "./BusinessList.module.scss";
//
type BusinessListProps = {
  list: BusinessCardProps[];
};
const BusinessList = ({ list }: BusinessListProps) => {
  return <div>BusinessList</div>;
};

export default BusinessList;
