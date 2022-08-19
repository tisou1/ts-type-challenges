// your answers
type CamelCase2<S extends string, RS extends string = ''> = 
    S extends `${infer F}_${infer Char}${infer R}`
      ? CamelCase2<R, `${RS}${Lowercase<F>}${Uppercase<Char>}`>
      : `${RS}${Lowercase<S>}`



    type sad0856 = CamelCase<'HELLO_WORLD_WITH_TYPES'>


//有下划线的 首字母大写
//没有下划线的, 整体都小写

/**
 * Lowercase 将所有字符都专为小写的
 * Uppercase 将所有字符都专为大写的
 * 
 * Capitalize 将字符串的第一个字符转为大写
 * Uncapitalize 将字符串的第一个字符转为小写
 */