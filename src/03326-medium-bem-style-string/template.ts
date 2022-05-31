// type BEM<B extends string, E extends string[], M extends string[]> = E[number] extends never
//   ? M[number] extends never
//   ? B
//   : `${B}--${M[number]}`
//   : M[number] extends never
//   ? `${B}__${E[number]}`
//   : `${B}__${E[number]}--${M[number]}`



// type BEM<B extends string, E extends string[], M extends string[]> =
//   E extends [infer F1, ...infer R1]
//     ? M extends [infer F2, ...infer R2]
//       ? `${B}__${E[number]}--${M[number]}`
//       : `${B}__${E[number]}`
//     : `${B}--${M[number]}`

type Prefix<T extends string[], K extends string> = 
  T[number] extends never
    ? ''
    : `${K}${T[number]}`

type BEM<B extends string, E extends string[], M extends string[]> = `${B}${Prefix<E, '__'>}${Prefix<M, '--'>}`

//T[number]来触发分布的效果,


type okl1 = BEM<'btn', ['price','siry'], ['warning', 'success']>