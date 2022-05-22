//合并{name:string} & {age?: number} 这种为
/*
*{
  name: string
  age?: number
}
*/
type Merge1<T> = {
  [P in keyof T]: T[P]
}
type PartialByKeys<T, K extends keyof any = keyof T> =
  Merge1<{ [P in (keyof T & K)]?: T[P] } & Omit<T, K>>


  

interface User {
  name: string
  age: number
  address: string
}

interface AA1 {
  name: string
  cc: boolean
}


type oC = PartialByKeys<User, 'name' | 'unknown'>

