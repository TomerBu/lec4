import Business from "../services/business";

export type BusinessCardProps = {
  callback: (id: string) => void;
} & Business;

export type BusinessListProps = {
  list: Business[];
  callback: (id: string) => void;
};

export type AddBusinessProps = {
  callback: (business: Business) => void;
};
