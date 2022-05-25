type Mutable<T extends object> =
 {
  -readonly [P in keyof T]: T[P]
 }

 interface Todo2 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
type opc = Mutable<Readonly<Todo2>>

