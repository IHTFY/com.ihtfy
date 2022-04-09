---
slug: prime
title: prime
date: 2015-08-29
excerpt: Plotting twin primes
tags: [code, art, math]
---

<script>
  import Image from "$lib/components/base/image.svelte";
  import CodeBlock from "$lib/components/blog/code-block.svelte";
  import Callout from "$lib/components/base/callout.svelte";
</script>

I made this in March of 2014. I was playing around with pygame and was learning how to assign colors to specific pixels. Composite numbers are black, twin primes are green, and other primes are blue. Pixels are enumerated from 0 starting at the top left and read like a book. Note: '2' should be blue, but I never fixed that.

<Callout type="info" date="2019-10-06">
2019-10-06
I created a JavaScript version that uses HTML5 canvas, and the '2' bug is fixed. It prompts you to enter a width and height of the image (defaults to 300x300), and then prompts for download.
</Callout>

![](/optimized-images/posts/prime/primes.png)

### New JS Version

<CodeBlock filename="primes.js" lang="javascript">

```javascript
function primesUpTo(x) {
  if (x < 2) return [];
  const primes = [2];
  let n = 3;
  for (let n = 3; n <= x; n += 2) {
    let elig = true;
    for (let p = 0; primes[p] <= n ** 0.5; p++) {
      if (n % primes[p] === 0) {
        elig = false;
        break;
      }
    }
    if (elig) primes.push(n);
  }
  return primes;
}

document.body.innerHTML = null;
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const w = prompt('width') || 300;
const h = prompt('height') || 300;

canvas.width = w;
canvas.height = h;

const ctx = canvas.getContext('2d');
let imageData = ctx.createImageData(w, h);

let primes = primesUpTo(w * h);
let found = 0;

// Iterate through every pixel
for (let i = 0; i < imageData.data.length; i += 4) {
  imageData.data[i] = 0;
  if (i / 4 === primes[found\) {
    if (i / 4 - 2 === primes[found - 1] || i / 4 + 2 === primes[found + 1]) {
      imageData.data[i + 1] = 255;
      imageData.data[i + 2] = 0;
    } else {
      imageData.data[i + 1] = 0;
      imageData.data[i + 2] = 255;
    }
    found++;
  } else {
    imageData.data[i + 1] = 0;
    imageData.data[i + 2] = 0;
  }
  imageData.data[i + 3] = 255;
}

// Draw image data to the canvas
ctx.putImageData(imageData, 0, 0);

if (window.confirm('Download?')) {
  let link = document.createElement('a');
  link.download = \`prime${w}x${h}.png\`;
  link.href = canvas.toDataURL('image/octet-stream');
  link.click();
}
```
</CodeBlock>

### A 4K Version

[4K Version](/optimized-images/posts/prime/prime4096x2190.png) (578 kB)

### Old Python Version

<CodeBlock filename="primes.py" lang="python">

```python
import pygame, sys
from pygame.locals
import *

pygame.init()

FPS = 60# frames per second setting
fpsClock = pygame.time.Clock()

# Window size
ASPECTRATIO = 16 / 9
WINDOWHEIGHT = 720
WINDOWWIDTH = int(WINDOWHEIGHT * ASPECTRATIO)

DISPLAYSURF = pygame.display.set\_mode((WINDOWWIDTH, WINDOWHEIGHT))# Window size
pygame.display.set\_caption('Number Visualization')# Window title

def primes(n):
  if n == 2: return [2]
elif n < 2: return []
s = range(3, n + 1, 2)
s = [x
  for x in s
  if x
]
mroot = n ** 0.5
half = (n + 1) / 2 - 1
i = 0
m = 3
while m <= mroot:
  if s[i]:
  j = (m * m - 3) //2
s[j] = 0
while j < half:
  s[j] = 0
j += m
i = i + 1
m = 2 * i + 3
return [2] + [x
  for x in s
  if x
]

def main(): #mouse position
mousex = 0
mousey = 0

RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

pList = primes(WINDOWWIDTH * WINDOWHEIGHT + 1)
pList = pList + [0]

twinColor = GREEN
regColor = BLUE

# main game loop
while True:
  pixObj = pygame.PixelArray(DISPLAYSURF)
i = 0
j = 0
nextP = 0
for x in range(1, WINDOWWIDTH * WINDOWHEIGHT):
  n = i * WINDOWWIDTH + j
if n == pList[nextP]:
  if nextP < len(pList) - 1:
  if ((pList[nextP + 1] - pList[nextP] == 2) | (pList[nextP] - pList[nextP - 1] == 2)):
    pixObj[j][i] = twinColor
else :
  pixObj[j][i] = regColor
nextP += 1
if i < WINDOWHEIGHT:
  if j < WINDOWWIDTH - 1:
  j += 1
else :
  if i < WINDOWHEIGHT:
  i += 1
j = 0
if x == WINDOWWIDTH * WINDOWHEIGHT:
  pixObj[j][i] = WHITE - 1
del pixObj
for event in pygame.event.get():
  if event.type == QUIT:
  pygame.quit()
sys.exit()
if event.type == MOUSEMOTION:
  mousex, mousey = event.pos

if event.type == MOUSEBUTTONDOWN:
  if event.button == 1:
  if twinColor == GREEN:
  twinColor = BLUE
else :
  if twinColor == BLUE:
  twinColor = GREEN
if event.button == 3:
  if regColor == GREEN:
  regColor = BLUE
else :
  if regColor == BLUE:
  regColor = GREEN
pygame.display.update()
fpsClock.tick(FPS)
pygame.image.save(DISPLAYSURF, "primes.png")

if __name__ == '__main__':
  main()
```
</CodeBlock>