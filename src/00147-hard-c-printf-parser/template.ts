type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<S extends string, U extends unknown[] = []> = 
  S extends `${infer _}%${infer P}${infer R}`
    ? P extends keyof ControlsMap
      ? ParsePrintFormat<R, [...U, ControlsMap[P]]>
      : ParsePrintFormat<R, U>
    : U
