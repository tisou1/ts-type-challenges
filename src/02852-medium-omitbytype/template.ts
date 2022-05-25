type OmitByType<T, U> = {
  [P in keyof T as T[P] extends U ? never :P]: T[P]
}


//主要是用as做类型映射,来进行判断对应的key和value

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>