![dep](https://badgen.net/bundlephobia/dependency-count/simple-class-namer)
![min](https://img.shields.io/bundlephobia/min/simple-class-namer)
![minZip](https://img.shields.io/bundlephobia/minzip/simple-class-namer)

# feature

classname utilities.  
supports `array/object`.

# usage

```ts
classNamer("a", "b", "c", false, null) // "a b c"
classNamer(["a", false, "b"]) // "a b"
classNamer({a: null, b: true, c: true}) // "b c"
classNamer("a", { b: false, c: true }, ["e", null, "f"]) // "a c e f"
```