import type { Equal, Expect, NotAny } from '@type-challenges/utils'

// [SOLUTION]
type HelloWorld = string

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
