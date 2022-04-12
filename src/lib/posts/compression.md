---
slug: compression
title: Compression
date: 2022-02-13
excerpt: How LZ string compression works
tags: [code, tutorial]
---

I was getting a warning on a coding project that each page was more than 1MB in size. The data is a list of coordinates, stored as a big string. I was able to reduce the size of the data to 20% the original size by rounding to whole numbers. Then I used [this LZ compression library](https://www.npmjs.com/package/lz-string) to reduce it to 5% the orignal size.

LZ is a lossless compression algorithm, which means you get the exact original input when you decompress. It works by:

1. List all the characters used by the data and store it in "dictionary"
2. For the next chunk of data to encode, find the longest "word" in the dictionary that matches
3. Store the dictionary index (the order the word appears) as the next chunk of encoded data
4. Add the original chunk plus the next character as a new dictionary word
5. Go to Step 2. until all data is encoded

If you wanted to compress the string "OROMEOROMEO"

You would get all the individual characters used and add them to the dictionary:

| Input       | Dictionary | Output |
| ----------- | ---------- | ------ |
| OROMEOROMEO | 1. O       |        |
|             | 2. R       |        |
|             | 3. M       |        |
|             | 4. E       |        |

Initialize the Dictionary

Next, we find the longest word that matches our remaining string, which is just "O", since there is no word starting with "OR".

Then, we encode it as the index (1)

| Input      | Dictionary | Output |
| ---------- | ---------- | ------ |
| ROMEOROMEO | 1. O       | 1      |
|            | 2. R       |        |
|            | 3. M       |        |
|            | 4. E       |        |

Next, we add "OR" to our dictionary. If we had had that entry in our last step, we could've encoded more data and saved more space. We add it now so that we can make use of it in the future.

| Input      | Dictionary | Output |
| ---------- | ---------- | ------ |
| ROMEOROMEO | 1. O       | 1      |
|            | 2. R       |        |
|            | 3. M       |        |
|            | 4. E       |        |
|            | 5. OR      |        |

Now, we repeat the process. Our next chunk is just "R", since "RO" isn't in the dictionary. We store 2 as output, remove the input, and add "RO" to the dictionary

| Input     | Dictionary | Output |
| --------- | ---------- | ------ |
| OMEOROMEO | 1. O       | 1,2    |
|           | 2. R       |        |
|           | 3. M       |        |
|           | 4. E       |        |
|           | 5. OR      |        |
|           | 6. RO      |        |

Next, we encode "O", since "OM" isn't in the dictionary.

| Input    | Dictionary | Output |
| -------- | ---------- | ------ |
| MEOROMEO | 1. O       | 1,2,1  |
|          | 2. R       |        |
|          | 3. M       |        |
|          | 4. E       |        |
|          | 5. OR      |        |
|          | 6. RO      |        |
|          | 7. OM      |        |

Next, "M" is encoded since "ME" isn't listed.

| Input   | Dictionary | Output  |
| ------- | ---------- | ------- |
| EOROMEO | 1. O       | 1,2,1,3 |
|         | 2. R       |         |
|         | 3. M       |         |
|         | 4. E       |         |
|         | 5. OR      |         |
|         | 6. RO      |         |
|         | 7. OM      |         |
|         | 8. ME      |         |

Next, "E" is encoded as "4" since "EO" isn't in the dictionary, but we'll add it.

| Input  | Dictionary | Output    |
| ------ | ---------- | --------- |
| OROMEO | 1. O       | 1,2,1,3,4 |
|        | 2. R       |           |
|        | 3. M       |           |
|        | 4. E       |           |
|        | 5. OR      |           |
|        | 6. RO      |           |
|        | 7. OM      |           |
|        | 8. ME      |           |
|        | 9. EO      |           |

Finally we find a longer match.

| Input  | Dictionary | Output    |
| ------ | ---------- | --------- |
| OROMEO | 1. O       | 1,2,1,3,4 |
|        | 2. R       |           |
|        | 3. M       |           |
|        | 4. E       |           |
|        | 5. OR      |           |
|        | 6. RO      |           |
|        | 7. OM      |           |
|        | 8. ME      |           |
|        | 9. EO      |           |

"O" is in the dictionary, but so is "OR" which is longer. Is "ORO" in the dictionary? No, so we encode "OR" as "5", and add "ORO" to the dictionary.

| Input | Dictionary | Output      |
| ----- | ---------- | ----------- |
| OMEO  | 1. O       | 1,2,1,3,4,5 |
|       | 2. R       |             |
|       | 3. M       |             |
|       | 4. E       |             |
|       | 5. OR      |             |
|       | 6. RO      |             |
|       | 7. OM      |             |
|       | 8. ME      |             |
|       | 9. EO      |             |
|       | 10. ORO    |             |

Next, we have "O" in the dictionary, but "OM" is there too. Is "OME"? No, so we encode "OM" as "7" and add "OME" to the dictionary.

| Input | Dictionary | Output        |
| ----- | ---------- | ------------- |
| EO    | 1. O       | 1,2,1,3,4,5,7 |
|       | 2. R       |               |
|       | 3. M       |               |
|       | 4. E       |               |
|       | 5. OR      |               |
|       | 6. RO      |               |
|       | 7. OM      |               |
|       | 8. ME      |               |
|       | 9. EO      |               |
|       | 10. ORO    |               |
|       | 11. OME    |               |

Finally, "EO" is in the dictionary so we encode it as "9", and we're done.

| Input | Dictionary | Output          |
| ----- | ---------- | --------------- |
|       | 1. O       | 1,2,1,3,4,5,7,9 |
|       | 2. R       |                 |
|       | 3. M       |                 |
|       | 4. E       |                 |
|       | 5. OR      |                 |
|       | 6. RO      |                 |
|       | 7. OM      |                 |
|       | 8. ME      |                 |
|       | 9. EO      |                 |
|       | 10. ORO    |                 |
|       | 11. OME    |                 |

Encode the next chunk

It doesn't look like we did much, and honestly, we didn't. This is because we used a very short starting string. But imagine we were compressing all of Romeo and Juliet. We would quickly be able to encode "ROMEO" as a single number and use that throughout.

Since our data is just numbers, we can store that efficiently. Letters are actually stored as numbers; there are different formats for encoding and interpreting them.

ASCII originally used 7 bits per character, which gives you 2⁷ (128) different numbers. That's enough to store the uppercase and lowercase letters, the numerals 0-9, the punctuation you have on the top row of a keyboard, and a few other special characters like "carriage return" or new line.

UTF-8 uses a byte (8 bits or 256 numbers) to store each character. It works for decoding ASCII , but it can also be used to decode Unicode by using up to 4 bytes (32 bits or 4,294,967,296 numbers), although Unicode only specifies 1,112,064 different characters.

UTF-16 uses 16 bits (2¹⁶ = 65536) to encode. It works with Unicode but not ASCII. These extra numbers can label characters for every language, random symbols, emoji.

If we wanted to encode (from letters to numbers) Romeo and Juliet written in another alphabet, Chinese for example, we'd need to store each character using a large number - probably in the thousands. But if we applied LZ encoding, we would only be storing numbers from 0 to something under 10,000 I'd guess.
