export type Address = {
  street: {
    streetName: string;
    streetNumber: string;
  };
  postalcode: string;
  city: string;
  country: string;
};

// export type numbersArray = string | number[];
// export type numbersArray = (string | number)[];
export type numbersArray = Array<string | number>;
