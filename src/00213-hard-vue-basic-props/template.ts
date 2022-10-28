// your answers

type CtorToType<T> = T extends () => infer RE
  ? RE
  : T extends new (...args: any) => infer R ? R : never

type sdj1 = CtorToType<string>

type GetProps<T> = {
  [P in keyof T]: T[P] extends { type: infer R }
    ? R extends (infer A)[] 
      ? CtorToType<A> 
      : CtorToType<R>
    : T[P] extends { [key: string]: never } 
      ? any 
      : CtorToType<T[P]>
}


type Vm<P, D, C, M> = {
  props: P
  data: (this: GetProps<P>) => D
  computed: C & ThisType<D & M & GetComputed<C>>
  methods: M & ThisType<D & GetComputed<C> & M & GetProps<P>>
}

declare function VueBasicProps<P, D, C, M>(options: Vm<P, D, C, M>): any










/*
declare function VueBasicProps<P, D, C, M>(options: Options<P, D, C, M>): any

type Tuple2Union<T> = T extends Array<any> ? T[number] : T;

type ComputedValueType<C> = {[P in keyof C]: C[P] extends () => infer R ? R : never }

type Basic<T> = T extends (...args: any) => infer R ? R : T extends new (...args: any) => infer R ? R : T extends Array<any> ? { [K in keyof T]: Basic<T[K]> } : T;

type PropsType2<P> = {
  [K in keyof P]: P[K] extends (...args: any) => infer R ? R : P[K] extends new (...args: any) => infer R ? R : P[K] extends {type: infer T} ? Tuple2Union<Basic<T>> : any
}

type Options<P, D, C, M> = {
  props: P,
  data: (this: PropsType2<P>) => D
  computed: C & ThisType<D & C & PropsType2<P>>
  methods: M & ThisType<D & ComputedValueType<C> & M & PropsType2<P>>
}
 */