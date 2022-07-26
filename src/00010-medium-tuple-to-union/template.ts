// type TupleToUnion<T> = T extends [...infer K] ? K[number] : never


type TupleToUnion<T extends unknown[]> = T[number]


type AAA = TupleToUnion<[123, '456', true]>