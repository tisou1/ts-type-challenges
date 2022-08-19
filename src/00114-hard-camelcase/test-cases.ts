import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CamelCase2<'foobar'>, 'foobar'>>,
  Expect<Equal<CamelCase2<'FOOBAR'>, 'foobar'>>,
  Expect<Equal<CamelCase2<'foo_bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase2<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
  Expect<Equal<CamelCase2<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
  Expect<Equal<CamelCase2<'-'>, '-'>>,
  Expect<Equal<CamelCase2<''>, ''>>,
  Expect<Equal<CamelCase2<'😎'>, '😎'>>,
]