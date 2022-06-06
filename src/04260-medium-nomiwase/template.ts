type StringUnion<T extends string> = T extends `${infer F}${infer R}`
  ? F | StringUnion<R>
  : never


type AllCombinations<T extends string , U extends string = StringUnion<T>> = 
  [U] extends [never]
    ? ''
    : '' | {
      [P in U]: `${P}${AllCombinations<never, Exclude<U, P>>}`
    }[U]


//先声明StringToUnion, 将'ABC' --> 'A' | 'B' | 'C'
//然后将T进行转化为Union,
//真多这个union进行分布展开的p in U 最后在用['U']进行循环展开, 展开的key对应的值
//就为,T的子集
