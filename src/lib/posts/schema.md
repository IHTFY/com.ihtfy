---
slug: schema
title: schema
date: 2022-03-27
excerpt: I'm working on the IQ test again.
tags: [code, math]
---

<script>
  import CodeBlock from "$lib/components/blog/code-block.svelte";
</script>

I'm working on the IQ test again. I'll have to work on the best way to represent rules, and configuration for different graphics. Basically, I think I will have a 3x3 array, filled with blank config files - maybe they will have indexes and neighbor references. Then I will apply rules to this array, modifying the config files. The config files will be able to define a graphic, like a grid with shapes, nested shapes, dot patterns etc.

The answer choices will have random parameters tweaked in this process, like modified rule numeric values or starting index.

The other day, I made a function to return an arbitrary diagonal of a matrix.

<CodeBlock lang="javascript" filename="utils.js">

```javascript
/**
 * The range of % is (-n, n). positiveMode restricts the range to [0, n).
 * 
 * @param {a value} x 
 * @param {the modulus} n 
 * @returns x mod n | x ϵ [0,n)
 */
const positiveMod = (x, n) => ((x % n) + n) % n;

/**
 * Pick a diagonal from a grid.
 * 
 * @param {3x3 grid} grid
 * @param {column index of first element} diagonalIndex
 * @param {1: right, -1: left} direction
 * @returns {array of elements in the diagonal, starting at the given index moving down and in the given direction}
 */

/**
 * 1 2 3  -1 -2 -3
 * 3 1 2  -2 -3 -1
 * 2 3 1  -3 -1 -2
 */

export const getDiagonal = (grid, diagonalIndex, direction) => {
  if (diagonalIndex < 0) {
    diagonalIndex = positiveMod(diagonalIndex, grid[0].length);
  }
  const output = [];
  for (let i = 0; i < grid.length; i++) {
    output.push(grid[i][positiveMod(diagonalIndex + direction * i, grid[i].length)]);
  }
  return output;
};
```

</CodeBlock>