export const uniq = (input: any[]) => Array.from(new Set(input));

export const compact = (input: any[]) => input.filter(Boolean);

export const isArray = (input: any): input is any[] => Array.isArray(input);

export const isObject = (input: any): input is Record<string, any> =>
  (typeof input === "object" || typeof input === "function") && input !== null;

