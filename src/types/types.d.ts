import Business from "../services/business";

export type BusinessCardProps = {
  // hidden: boolean;
} & Business;

export type BusinessListProps = {
  list: BusinessCardProps[];
};