type IsTuple<T> = 
  [T] extends [never]
    ? false
    : T extends readonly unknown[]
      ? number extends T['length']
        ? false
        : true
      : false


//https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
//tuple可以知道具体的长度和类型
//所以用number extends T['length']来判断他的长度是否为number
//T extends readonly unknown[]主要是过滤如{length: 2}这样的对象

//array和 tuple的话
type Lk<T extends unknown[]> = T['length']

type asdasd =  Lk<string[]>  //number
type asdasd2 = Lk<[number]>
