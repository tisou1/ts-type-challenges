type Join<T extends unknown[], U extends string | number> = 
  T extends [infer F, ...infer R]
    ? R['length'] extends 0
      ? F
      : `${F & string}${U}${Join<R,U>}`
    : ''

