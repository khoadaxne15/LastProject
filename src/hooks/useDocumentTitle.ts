import { useLayoutEffect } from "react";

export const useDocumentTitle = (title: string) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "TK - eCommerce React App";
    }
  }, [title]);
};
