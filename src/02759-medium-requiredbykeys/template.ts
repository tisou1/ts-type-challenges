type RequiredByKeys<T,K = keyof T> = 
  Omit<T & Required<Pick<T, K & keyof T>>,never>

interface User1 {
  name?: string
  age?: number
  address?: string
}


type il = RequiredByKeys<User1>
type lpo =  Required<User1>

// type Required<T> = {
//   [P in keyof T]-?: T[P];
// };