import Business from "../../services/business";
import styles from "./BusinessList.module.scss";

type BusinessListProps = {
  list: Business[];
};
const BusinessList = ({ list }: BusinessListProps) => {
  return <div>BusinessList</div>;
};

export default BusinessList;
