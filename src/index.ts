import { uniq, isArray, isObject, compact } from "./utils";

export type ClassNamerArg = any;

export const classNamer = (...inputs: ClassNamerArg[]) => {
  const result = inputs.reduce((prev, current) => {
    if(!current){
      return prev;
    }

    if (
      typeof current === "string" ||
      typeof current === "number" ||
      typeof current === "boolean"
    ) {
      prev.push(current);
    }else if(isArray(current)) {
      compact(current).forEach(d => prev.push(d))
    } else if(isObject(current)) {
      for (const key in current) {
        if (current[key]) {
          prev.push(key);
        }
      }
    }

    return prev;
  }, []);  

  return uniq(result).join(" ");
};
