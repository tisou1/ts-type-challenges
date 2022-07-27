
type Trunc<T extends number | string> = 
  `${T}` extends `${infer F}.${string}`
    ? F
    : `${T}`


    //代码切片