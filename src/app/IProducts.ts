export interface IProducts {
  name: string;
  price: number;
  description?: string; // optional property
  image?: string; // images
  availability: boolean;
  longdescription: string;
}
