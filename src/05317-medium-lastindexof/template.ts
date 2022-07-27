

type LastIndexOf<T extends unknown[], U> = 
  T extends [...infer R, infer F]
    ? MyEqual<F, U> extends true
      ? R['length']
      : LastIndexOf<R, U>
    : -1