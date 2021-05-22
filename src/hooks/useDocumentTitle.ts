import { useEffect } from "react";
export const useDocumentTitle = (title: string) => {
  const originalTitle = document.title;
  useEffect(() => {
    document.title = title;
  }, [title, originalTitle]);
};
