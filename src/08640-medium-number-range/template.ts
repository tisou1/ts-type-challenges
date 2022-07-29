
// type NumberRange<L extends number, H, R extends unknown[] = BuildArray<L, 'siry'>> =
//   R['length'] extends H
//     ? Exclude<[...R, R['length']][number], 'siry'>  //从最终的union中排除掉 siry, 或者直接使用never,这样就不需要Exclude了
//     : NumberRange<L, H, [...R, R['length']]>



    
type NumberRange<L extends number, H, R extends unknown[] = BuildArray<L, never>> =
R['length'] extends H
  ? [...R, R['length']][number]  //从最终的union中排除掉 siry, 或者直接使用never,这样就不需要Exclude了
  : NumberRange<L, H, [...R, R['length']]>