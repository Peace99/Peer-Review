import { cloneElement } from "react";

interface props {
  number: number;
  element: JSX.Element;
}

export default function Duplicate({ number, element }: props) {
  if (process.env.NODE_ENV !== "development") return element;
  return (
    <>
      {Array(number)
        .fill(number)
        .map((element, index) => cloneElement(element, { key: index }))}
    </>
  );
}
