---
slug: matrices
title: Matrices
date: 2022-03-20
excerpt: Thoughts about Raven's Progressive Matrices
tags: [math, code]
---

There's a type of puzzle called a Raven's Matrix. It was developed as a type of IQ test, but I remember doing it in elementary school. There's a free IQ test from Mensa Norway you can try: [test.mensa.no](https://test.mensa.no)

I thought it would be fun to make a web app that generates these matrices. There's a very basic version I found [here](https://www.caseyrule.com/projects/pattern-puzzle). Basically just a few shapes, different fill colors, and border styles, and sometimes a nested shape.

[This](https://link.springer.com/content/pdf/10.3758/BRM.42.2.525.pdf) is a paper from Sandia National Labs in 2009 which describes some of the patterns used to create the matrices. The implementation is public [here](https://github.com/LauraMatzen/Matrices), but it uses an old version of Java and I didn't feel like getting that to run. It also includes sample output from the program, and you can see it's not as visually diverse as the Norway test.

I find these types of puzzles pretty simple once you notice the handful of rules used to create them. Some of the most common things are rotating an element, combining rows/columns, overlaying and applying XOR (exclusive OR, meaning it can't be both), AND, or some other boolean operation, as well as recognizing when theses rules are combined with each and very often row-shifted.

| Straight Down | Down and Right |
| ------------- | -------------- |
| 123           | 123            |
| 123           | 312            |
| 123           | 231            |

This shifting can happen vertically or in the opposite direction as well. Notice how the numbers form diagonals rather than columns.

Another common operation is to simply interpret sub elements in a cell as numbers and then add or subtract them to calculate the cell in the final row/column.

It would be cool to gather people's raw scores and then calculate the mean and deviation to be able to normalize it and give an IQ score. I could also give explanations for each puzzle at the end since they're created with simple rules.

| flip horizontally⟶ | rotate 180° ⟶ |     |
| ------------------ | ------------- | --- |
| b                  | d             | p   |
| u                  | u             | n   |
| 5                  | S             |     |

For example, this puzzle take the first column, then flips horizontally to get the second column, then rotates 180° to get the final column. So the solution takes "5" flips horizontally to become "S", then rotates 180° to get "S" again.
