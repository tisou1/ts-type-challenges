

type UnionToIntersection<U> = 
(U extends any ? (p: U) => any : never) extends (p: infer R) => any 
  ? R 
  : never


//利用 U extends any 来触发union在泛型中的分布特性
//再利用函数参数的形式来进行infer的类型推到.返回对应的U的子类型