---
slug: knight
title: knight
date: 2021-03-16
excerpt: I made a chess puzzle game.
tags: [code, gaming]
---

## [knightpuzzle.ihtfy.com](https://knightpuzzle.ihtfy.com/)

I saw this video where Grandmaster Ben Finegold explains a simple chess puzzle. It only involves two pieces: a knight and a queen.

[GM Ben Finegold Explains the Puzzle](https://youtu.be/SrQlpY\_eGYU?t=45)

The goal and rules are pretty simple, and you only need to know how the two pieces work to solve it.

## Goal

Visit each _free_ square from right-to-left and top-to-bottom as quickly as possible.

## Rules

- The knight starts on h8, and the queen is permanently on d5.
- The knight can never go to a square attacked by the queen
- The knight cannot capture the queen

## [Play it](https://knightpuzzle.ihtfy.com/)

The true challenge is to do it on a real board where there is no help in the form of showing legal moves, keeping track of which square is the next target, etc. But that requires some referee to call out fouls.

I added options to show the target square, and if you're really having trouble, Queen Vision, which darkens all the squares the queen can attack.

There is also a Stats section that shows your time splits for each target as well as how many moves it took. The "Best" is what I think the optimal length is. If you find a shorter path between two targets, please send me the a message [here](https://frankiemercado.com/contact/).

[Try it out](https://knightpuzzle.ihtfy.com/), or see the [source code](https://github.com/IHTFY/knight-puzzle).
