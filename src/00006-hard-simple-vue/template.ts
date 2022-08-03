declare function SimpleVue<D, C, M>(options: {
  data: (this: void) => D,
  computed: C & ThisType<D>,
  methods: M & ThisType<D & GetComputed<C> & M>
}
): unknown


//计算属性的返回值
type GetComputed<T> = {
  [P in keyof T]: T[P] extends () => infer R ? R : never
}