---
slug: point
title: point
date: 2016-01-07
excerpt: Gernerative art using Processing
tags: [code, art, math]
---

<script>
  import Image from "$lib/components/base/image.svelte";
  import CodeBlock from "$lib/components/blog/code-block.svelte";
</script>

I made this in June of 2014. I was using processing (a java library) to make mosaic and pointillism style images from existing pictures.

### Cloud

Generated circles are semi-uniformly distributed (small deviations from initial lattice)

<Image
  path="posts/{slug}"
  filename="cloud"
  figcaption="original"
  alt="original"
/>
<Image
  path="posts/{slug}"
  filename="capped-cloud"
  figcaption="generated"
  alt="generated"
/>

### Lake

Using randomly placed circles of roughly equal diameter

<Image
  path="posts/{slug}"
  filename="lake"
  figcaption="original"
  alt="original"
/>
<Image
  path="posts/{slug}"
  filename="capped-lake"
  figcaption="generated"
  alt="generated"
/>

Video showing shrinking polygons to reduce uncovered spots. I just realized this is the same concept of simulated annealing.

## Watch a video

[![Annealed Mosaic - Breaking Bad](http://i3.ytimg.com/vi/st9v2upmL70/maxresdefault.jpg)](https://youtu.be/st9v2upmL70)

### Fruit

Randomly placed quadrilaterals

<Image
  path="posts/{slug}"
  filename="banana"
  figcaption="original"
  alt="original"
/>
<Image
  path="posts/{slug}"
  filename="capped-banana"
  figcaption="generated"
  alt="generated"
/>

### Jaguar

Using small polygons and larger polygons

<Image
  path="posts/{slug}"
  filename="leo"
  figcaption="original"
  alt="original"
/>
<Image
  path="posts/{slug}"
  filename="capped-leo1"
  figcaption="generated"
  alt="small quads"
/>
<Image
  path="posts/{slug}"
  filename="capped-leo2"
  figcaption="generated"
  alt="large quads"
/>

### Another Jaguar

Random circles

<Image
  path="posts/{slug}"
  filename="cheetah"
  figcaption="original"
  alt="original"
/>
<Image
  path="posts/{slug}"
  filename="capped-cheetah"
  figcaption="generated"
  alt="generated"
/>

### White and Pink


<Image
  path="posts/{slug}"
  filename="bb"
  figcaption="original"
  alt="original"
/>
<Image
  path="posts/{slug}"
  filename="capped-bb"
  figcaption="generated"
  alt="generated"
/>

## Watch a video
[![Annealed Mosaic - Breaking Bad](http://i3.ytimg.com/vi/BCXYKs8LsZQ/maxresdefault.jpg)](https://youtu.be/BCXYKs8LsZQ)


### Source:

<CodeBlock lang="java">

```java
PImage bg;
String img;
float min;
float max;
int shape;
boolean draw;
float t = 5;
boolean recording = false;
boolean progressive = false;
 
void setup() {
  size(1600,900); // source image resolution
  img = "lake.png"; // source image name
  bg = loadImage("./images/" + img); // source image directory
  imageMode(CENTER);
  background(0);
  min = 1; // minimum shape size
  max = 8; // maximum shape size
  shape = 0; // 0 circle, 1 quad
  draw = true; // use mouse to color in
  recording = false; // output movie frames
  progressive = false; // simulated annealing
}
 
void draw() {
  if (progressive) {
    t += 20;
    max = 50000./t;
    println(50000./t);
  }
  for (int i=0; i<500; i++) {
    if (shape == 0) {
      if (draw) {
        // for hand drawing
        int x = mouseX;
        int y = mouseY;
        int dx = abs(x-pmouseX);
        int dy = abs(y-pmouseY);
        float speed = sqrt(dx*dx+dy*dy);
        noStroke();
        color c = bg.get(x,y);
        fill(c,128);
        ellipse(x,y,sqrt(speed*2),sqrt(speed*2));
      }
      else {
        int x = int(random(bg.width));
        int y =int(random(bg.height));
        x -= x%min;
        y -= y%min;
        int r = int(random(max-min)+min);
        noStroke();
        color c = bg.get(x,y);
        fill(c,128);
        ellipse(x,y,r,r);
      }
    }
    if (shape == 1) {
      int x = int(random(bg.width));
      int y =int(random(bg.height));
      noStroke();
      color c = bg.get(x,y);
      fill(c,128);
      quad(x-int(random(max-min)+min),y-int(random(max-min)+min),x+int(random(max-min)+min),y-int(random(max-min)+min),x+int(random(max-min)+min),y+int(random(max-min)+min),x-int(random(max-min)+min),y+int(random(max-min)+min));
    }
  }
  if (recording) {
    saveFrame("./images/movie/frames####.png"); // output frame
  }
}
 
void keyPressed() {
  if (key == 'r' || key == 'R') {
    recording = !recording; // flag to save frames for animation
  }
  if (key == 'p' || key == 'P') {
    saveFrame("./images/Capped-" + img); // output image
  }
}
```

</CodeBlock>