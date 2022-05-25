
type Value<T> = [T] extends [undefined] ? T : Exclude<T, undefined>

type ObjectEntries<T> = {
  [P in keyof T]-?: [P, Value<T[P]>]
}[keyof T]

//用数组本身的便利方式,先把key和value放到 新的对象的value中
//然后利用[keyof T] 分布的去除对应的新value


let origin = {
  name: 'origin',
}

let obj1 = {
  age: 22
}
Object.setPrototypeOf(obj1, origin)

function objectEntries(obj: any) {
  for (const key in obj) {//继承的属性也会遍历出来
    if(obj.hasOwnProperty(key))//锅炉掉继承来的属性,
      console.log([key, obj[key]])
  }
}

objectEntries(obj1)