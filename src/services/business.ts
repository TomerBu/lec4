import { v4 as uuidv4 } from "uuid";
export default class Business {
  id: string = uuidv4();
  name: string;
  description: string;
  image: string;
  link: string;

  constructor(
    name: string,
    description: string,
    image: string,
    link: string,
    id?: string
  ) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.link = link;
    if (id) {
      this.id = id;
    }
  }
}

// https://cdnjs.cloudflare.com/ajax/libs/uuid/8.3.2/uuid.min.js