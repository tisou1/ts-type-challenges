type Last<T extends any[]> =
//  T extends [...infer _, infer Last] ? Last : never
 T extends [...unknown[], infer Last] ? Last : never


