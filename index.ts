export const classNamer = (...inputs: ClassNamerArg[]) => {
  const accumList = [];

  for (let i = 0; i < inputs.length; i++) {
    const val = inputs[i];

    if (!val) {
      continue;
    }

    if (
      typeof val === "string" ||
      typeof val === "number" ||
      typeof val === "boolean"
    ) {
      accumList.push(val);
    } else {
      for (const key in val) {
        if (val[key]) {
          accumList.push(key);
        }
      }
    }
  }

  const uniqed = Array.from(new Set(accumList));

  return uniqed.join(" ");
};
