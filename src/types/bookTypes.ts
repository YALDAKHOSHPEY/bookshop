*/hey*/
export type Book = {
    id: number;
    title: string;
    author: string;
    price: number;
    image: string;
    description: string;
    category: string;
  };
  
  export type CartItem = Book & {
    quantity: number;
  };
