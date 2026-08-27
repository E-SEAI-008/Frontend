import type { ReactNode } from 'react';
import { ProductSchema } from '../schemas';
import {z} from "zod/v4";

export interface IUser {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children?: ReactNode;
}

export type Status = 'idle' | 'loading' | 'success' | 'error';

export type UserArray = IUser[];

export type Product = z.infer<typeof ProductSchema>

export type Products = Product[];