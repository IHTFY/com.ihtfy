---
slug: pseudorandom
title: "pseudorandom"
date: "2022-02-14"
excerpt: 'TODO'
tags: [todo]
---

I'm still tinkering around with the [calendar maker](https://calendar.ihtfy.com/). I decided to give each event (birthday, holiday, anniversary, etc.) a random id. Rather than just use `Math.random()`, I decided to try using the browser's `Crypto` interface. There's a nice function that generates a UUID (universally unique identifier): `window.crypto.randomUUID()`. The result looks something like this: `'a1d803ce-822e-4d2d-a68f-16f85a5c1508'`. This is a 128 bit label which means there are 2128 unique values - around 3.4x1038 or roughly a trillion times a trillion times a trillion.

You can also generate random integers using `getRandomValues`, and following the format (replacing `ARRAY`): `crypto.getRandomValues(new ARRAY(1))[0]`. You can use any of the typed integer arrays in JavaScript.

| Array             | Number of Values                 | Range                                       |     |     |
| ----------------- | -------------------------------- | ------------------------------------------- | --- | --- |
| Int8Array         | 2⁸ = 256                         | [-128, 127]                                 |     |     |
| Int16Array        | 2¹⁶ = 65,536                     | [-32768, 32767]                             |     |     |
| Int32Array        | 2³² = 4,294,967,296              | [-2147483648, 2147483647]                   |     |     |
| Uint8Array        | 2⁸ = 256                         | [0, 255]                                    |     |     |
| Uint16Array       | 2¹⁶ = 65,536                     | [0, 65535]                                  |     |     |
| Uint32Array       | 2³² = 4,294,967,296              | [0, 4294967295]                             |     |     |
| Uint8ClampedArray | 2⁸ = 256                         | [0, 255]                                    |     |     |
| BigInt64Array     | 2⁶⁴ = 18,446,744,073,709,551,615 | [-9223372036854775808, 9223372036854775807] |     |     |
| BitUint64Array    | 2⁶⁴ = 18,446,744,073,709,551,615 | [0, 18446744073709551615]                   |     |     |

The only difference between Uint8Array and Uint8ClampedArray is that the if you try assign a number outside of the range [0, 255], the clamped array will round you up to 0 or down to 255. The Uint8Array will take loop over, so 256 becomes 0, and -1 becomes 255, etc. I don't think this has an effect on the random output code above though.

The "U" in the name stands for "unsigned", meaning the numbers are non-negative. The signed versions have are just centered around zero, so there are an equal amount of negative and non-negative outcomes.
