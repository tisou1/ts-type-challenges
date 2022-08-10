//先获取T的所有必选属性keys, 然后利用union的分布特性,进行interface转为union
//1.
type RequiredKeys<T, K = keyof GetRequired<T>> = K extends any ? K :never

//2. 相当于是1的未简化版
// type RequiredKeys<T, K = keyof T> = K extends keyof T ? T[K] extends Required<T>[K] ? K : never : never

//3
// type RequiredKeys<T, K = keyof T> = 
//   K extends keyof T
//     ? {} extends Pick<T, K>
//       ? never
//       : K
//     : never





type ols23 = RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>