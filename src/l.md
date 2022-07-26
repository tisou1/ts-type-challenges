## ts学习


### infer

用法: 类型推断 | 代码切片

- 类型推断
  推断未知的类型

- 代码切片
```ts
  type getLast<T extends unknow[]> = 
    // T extends [...infer _, infer Last] : Last : never
    T extends [...unknow[], infer Last] : Last :never
 
  type getFirst<T extends unknow[]> = 
    T extends [infer F, ...infer _] ? F : never
```


### extends
用法: A extends B ? true : false
如果A是B类型,返回true否则返回false


### keyof
获取对象(interface)的的所有对象

### in 
```ts
type Person  = {
  name: string
  age: number
}

type Om = {
  [Key in keyof Person]: boolean
}
```


### key remapping in mapped types(类型重映射)
类型重映射: 在我们遍历可迭代的对象时, 进行过滤


### 判断是否是一个对象(Object, Array)
```ts
  1. 使用 keyof
  2. 使用extends 配合Record<string, unknow>

  type IsObj<T> = T extends Record<string, unknow> ? true : false

  type IsOb2<T> = keyof T extends never ? false : true 

```


### T[number]
返回数组的union形式
```ts
  type A<T extends unknow[]> = T[number]  
  type Ol = A<[1,2,3]> // 1 | 2  | 3 
```


### 获取数组第一项和最后一项

```ts
  type getLast<T extends unknow[]> = 
    // T extends [...infer _, infer Last] : Last : never
    T extends [...unknow[], infer Last] : Last :never

  type getFirst<T extends unknow[]> = 
    T extends [infer F, ...infer _] ? F : never
```