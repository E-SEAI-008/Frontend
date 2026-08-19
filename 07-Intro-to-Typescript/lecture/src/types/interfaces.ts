import type { Address } from ".";

export interface IUser {
  username: string;
  email: string;
  birthDate: string;
  hobbies: string[];
  address?: Address;
}