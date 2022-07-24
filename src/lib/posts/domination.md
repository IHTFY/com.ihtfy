---
slug: domination
title: Domination
date: 2022-07-23
excerpt: I made another chess puzzle game thing.
tags: [coding, gaming]
---

## [Play It!](https://domination.ihtfy.com/)

[domination.ihtfy.com](https://domination.ihtfy.com/)

## Intro

There's a classic chess puzzle called the [Eight Queens Problem](https://mathworld.wolfram.com/QueensProblem.html). The goal is to place eight queens on a chessboard such that no two queens are attacking each other. It's pretty tricky. Eight also happens to be the maximum number. It's clear we cannot place nine, because each queen must occupy a private column and row.

This puzzle can be generalized to any of the other pieces. Pawns are a bit funny, because they are the only piece whose movement depends on the board orientation.

## Game Modes

I call this "Non-Attacking" mode, and the goal is to place as many of a given piece type without any pieces attacking each other. There is another mode called "Domination".

The goal of domination is to attack or occupy every square on the board with the fewest number of pieces - using only one type of piece.

## Solutions

The blue buttons will generate solutions for either game mode and any piece. The solution set is **not** complete for every combination at the time of writing.

## Highlighting

- If there are mixed pieces on the board, the position is not a valid solution, so some of the pieces will be highlighted.
- In Non-Attacking mode, pieces that attack each other will be highlighted
- In Domination mode, any squares that are not covered by a piece will be highlighted

## Saving

The scoreboard and sound/highlighting/game mode settings are stored in the browser's `localStorage`. This means it will persist if you leave the site and come back later. You can click the `RESET SCORES` button to clear this at any time.

## PWA

It is also an installable PWA with offline support, so you can add it to your phone or computer as an app.
