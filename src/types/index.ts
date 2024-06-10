import { ReactNode } from "react";

export interface ReactChildrenProps {
  children: ReactNode;
  className?: string;
}

export interface IFileList {
  data?: File;
  url: string;
  ref?: string;
}

export interface FormValues {
  images: string[] | [];
  title: string;
  price: number;
  location: string;
  description: string;
}
