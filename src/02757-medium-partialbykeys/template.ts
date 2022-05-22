//合并{name:string} & {age?: number} 这种为
/*
*{
  name: string
  age?: number
}
*/
//1
// type Merge1<T> = {
//   [P in keyof T]: T[P]
// }
// type PartialByKeys<T, K extends keyof any = keyof T> =
//   Merge1<{ [P in (keyof T & K)]?: T[P] } & Omit<T, K>>


//不使用merge
//2
// type PartialByKeys<T, K extends keyof any = keyof T> =
//   Omit<{ [P in (keyof T & K)]?: T[P] } & Omit<T, K>,never>

//3.使用Partial
type PartialByKeys<T, K extends keyof any = keyof T> =
  Omit<Partial<Pick<T, K & keyof T>> & Omit<T, K>, never>


interface User {
  name: string
  age: number
  address: string
}

interface AA1 {
  name?: string
}



type oC = PartialByKeys<User, 'name' | 'unknown'>

