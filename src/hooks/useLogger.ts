import { useEffect } from "react";
export const useLogger = (componentName: string, value: string) => {
  useEffect(() => {
    console.log(`${componentName}`, value);
  });
};
