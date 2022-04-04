---
slug: chess engine
title: "chess engine"
date: "2022-01-16"
excerpt: 'TODO'
tags: [todo]
---

I started making a chess engine a while ago. I only got as far as making random moves.

Today, I added a basic evaluation function that simply counts the material imbalance. Then it uses mini-max with alpha beta pruning at a depth of 3. It's still very dumb, and you can win fast with a short tactic.

I know many chess engines use different evaluation formulas for he midgame and endgame, such as giving greater preference to long range pieces (bishops and rooks). I don't plan on outperforming stockfish, but I'd like to make an engine that I can't beat. My online rating is around 1800.

I learned chess from my dad when I was around 7 years old. He always beat me, and I was never very good, but I always enjoyed the game. My best friend Taylor and I wound play. We nearly alternated wins each game.

I picked the game up again in the summer of 2020. My blitz rating started at 1400 and dropped to 650. It was a steady climb to 1650 over the course of 9 months. The next 3-6 months, I climbed to around 1750. I mostly do puzzles now since I find them relaxing. I also watch videos - mostly Daniel Naroditsky.

My reintroduction came after watching the Penguinz0/xQc 6 move checkmate. I watched the remainder of pogchamps, then found Danya's channel. I definitely recommend it to anyone interested in how to become a better chess player.

I realized there were so many heuristics I had never considered. I had always worked on pure calculation when I was younger. But it makes sense to slowly expand your pieces, keeping everything defended along the way.

I had never even thought about playing positionally. I never put rooks on open files without the intention of traveling down the file on the next move. Similarly, I never thought to place my bishops on long diagonals where they may one day have reign across the whole board.
