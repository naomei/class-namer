export type ClassNamerArg = any;

const uniq = (input: any[]) => Array.from(new Set(input));

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
    } else {
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
