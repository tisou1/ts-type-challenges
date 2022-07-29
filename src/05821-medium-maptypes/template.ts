
type MapObj1 = {
  mapFrom: unknown
  mapTo: unknown
}

type Transform1<T, R extends MapObj1> = 
  R extends any  //触发union分布特性
    ? T extends R['mapFrom']
      ? R['mapTo']
      : never
    : never
type MapTypes<T, R extends MapObj1> = {
  [P in keyof T]: T[P] extends R['mapFrom'] ? Transform1<T[P], R>: T[P]
}

type klm1 = MapTypes<{ name: string; date: Date }, { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }>


//1. 遍历对象
//2. 判断每一项的值是否是R中的mapFrom
//2.1 如果是,则进行转换
//2.2 如果不是继续循环