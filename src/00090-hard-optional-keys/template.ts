//1.
// type OptionalKeys<T, K = keyof GetOptional<T>> = K extends any ? K :never 

//.2
// type OptionalKeys<T, K = keyof T> = 
//   K extends keyof T 
//     ? T[K] extends Required<T>[K]
//       ? never
//       : K
//     : K

//3. 
type OptionalKeys<T> = keyof {[K in keyof T as {} extends Pick<T,K> ? K : never]: unknown}
