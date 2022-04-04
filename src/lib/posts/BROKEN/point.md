---
slug: point
title: "point"
date: "2016-01-07"
excerpt: 'TODO'
tags: [todo]
---

<script>
  import CodeBlock from "$lib/components/blog/code-block.svelte";
</script>

I made this in June of 2014. I was using processing (a java library) to make mosaic and pointillism style images from existing pictures.

### Cloud

Generated circles are semi-uniformly distributed (small deviations from initial lattice)

![cloud](/images/post/point/cloud.png)
![capped-cloud](/images/post/point/capped-cloud.png)


### Lake

Using randomly placed circles of roughly equal diameter

![lake](/images/post/point/lake.png)
![capped-lake](/images/post/point/capped-lake.png)


Video showing shrinking polygons to reduce uncovered spots. I just realized this is the same concept of simulated annealing.

[![Annealed Mosaic - Breaking Bad](http://i3.ytimg.com/vi/st9v2upmL70/maxresdefault.jpg)](https://youtu.be/st9v2upmL70)

### Fruit

Randomly placed quadrilaterals

![banana](/images/post/point/banana.jpg)
![capped-banana](/images/post/point/capped-banana.jpg)

### Jaguar

Using small polygons and larger polygons

![leo](/images/post/point/leo.jpg)
![capped-leo1](/images/post/point/capped-leo1.jpg)
![capped-leo2](/images/post/point/capped-leo2.jpg)


### Another Jaguar

Random circles

![cheetah](/images/post/point/cheetah.png)
![capped-cheetah](/images/post/point/capped-cheetah.png)


### White and Pink

![bb](/images/post/point/bb.jpg)
![capped-bb](/images/post/point/capped-bb.jpg)



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