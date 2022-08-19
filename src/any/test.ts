type CamelCase23<S extends string, RS extends string = '', Arr extends unknown[] = []> = 
    S extends `${infer F}_${infer Char}${infer R}`
      ? R
      : CamelCase23<S, '', [unknown,...Arr]>

      
    type sad0835 = CamelCase23<'HELLO_WORLD_WITH_TYPES'>


/**
 * 模式匹配简而言之是通过 extends 对类型参数做匹配，
 *  如果匹配成功，就会将匹配结果保存到通过 infer 声明的局部类型变量里。
 * 
 * 所以就是说infer接收到的就是匹配成功后的.
 */