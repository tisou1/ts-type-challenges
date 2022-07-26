
// type DeepReadonly<T> = 
// T extends Record<string, unknown> ? { readonly [key in keyof T]: DeepReadonly<T[key]> } : T



type DeepReadonly<T> = {
  readonly [Key in keyof T]: keyof T[Key] extends never ? T[Key] : DeepReadonly<T[Key]>
}


/**
 * 把最外层的{} 也进行一个判断.如果没有嵌套的话,直接返回T本身
 */


type AA = {name:string} extends Record<string,unknown> ? true : false
