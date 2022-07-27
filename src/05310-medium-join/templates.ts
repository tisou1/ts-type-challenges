// type Join<T extends unknown[], U extends string | number> = 
//   T extends [infer F, ...infer R]
//     ? R['length'] extends 0
//       ? F
//       : `${F & string}${U}${Join<R,U>}`
//     : ''


type Join<T extends unknown[], U extends string | number, S extends string = ''> = 
  T extends [infer F, ...infer R]
    ? Join<R, U, S extends '' ? F : `${S}${U}${F & string}`>
    : S

    
    type gis = Join<[1,2,3,4,5], '+'>

/**
 * 如果不是string的数组, 可能会有一点问题
 */