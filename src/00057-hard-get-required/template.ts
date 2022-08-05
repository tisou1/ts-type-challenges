type GetRequired<T> = 
{
  [P in keyof T as T[P] extends Required<T>[P]? P : never]: T[P]
}

type sd223 = GetRequired<{ foo: number; bar?: string }>


//实用到了 类型映射 + extends + Required工具
//类型映射之后利用extends的可分配性来判断 原来的接口类型中的字段能不能分配给使用Require<T>之后的
//如果T 里面有可选的{name: string, age?: number} 那么就会出现(number | unfefined) extends age(number)的这样一个判断,就会过滤调了


interface Todo22 {
  title?: string;
  description: string;
  completed: boolean;
}

type ol902 = Required<Todo22>
 