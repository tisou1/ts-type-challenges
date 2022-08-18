type CapitalizeWords<S extends string, AuxStr extends string = ""> = S extends `${infer Char}${infer Rest}`
  ? Char extends Capitalize<Char>
    ? // Char is already capitalized or not a letter 字符已经是大写的或者是非字母
      Char extends Uncapitalize<Char>
      ? // Char is not a letter 字符不是字母,出现了分隔符
        `${Capitalize<AuxStr>}${Char}${CapitalizeWords<Rest>}` // Capitalize the string before Char (AuxStr) and verify the Rest
      : // Char is a capitalized letter 字符是字母
        CapitalizeWords<Rest, `${AuxStr}${Char}`>
    : // Char is a uncapitalized letter 字符是一个非大写字母
      CapitalizeWords<Rest, `${AuxStr}${Char}`> // Add it to AuxStr and verify the Rest
  : Capitalize<AuxStr>;


/**
 * Capitalize 将首字母大写  Uncapitalize 将首字母小写
 * 
 * 首先判断当前的字符是否是大写的
 *   判断当前的字符是不是字母(使用Char extends Uncapitalize<Char>字符本身如果能够分配给其小写的,则说明不是字母)
 */