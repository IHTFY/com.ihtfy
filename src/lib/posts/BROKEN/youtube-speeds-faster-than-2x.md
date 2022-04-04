---
slug: YouTube Speeds Faster Than 2x
title: "YouTube Speeds Faster Than 2x"
date: "2019-06-08"
excerpt: 'TODO'
tags: [todo]
---

I remember speeding up books on tape to chipmunk speeds so I could get through them faster. Today, my podcast app does this without the pitch distortion, and it can even trim out the silent parts.

YouTube recently added a slider to select a custom speed between 0.25x and 2x at 0.05x increments.

![](images/slider-1.png)

Custom playback speed slider

![](images/speed-settings-copy-1.png)

Preset playback speeds

But you can do more. It's possible to choose any speed between 0x and 16x by changing the value of the video's `playbackRate` property.

I wrote a little JavaScript code that will let you type in whatever speed you want. It works for lots of other sites too, like Netflix, Twitter, and Facebook.

## Making a Bookmarklet

UPDATE: I've made [a page](https://ihtfy.github.io/JavaScript-Bookmarklets/) that lists some of the bookmarklets I've made. The custom video speed is the 1st one.

First, make a new bookmark. In chrome, you can use `ctrl + d`. You can do it on any page, but before you click "Done", click on "More...".

![](images/bookmark-2.png)

I like the Name to be short so I use this: ⏩

Then paste the following code into the URL. To copy it, double click anywhere in the code, then use `ctrl + c`.

```javascript
javascript: {
  if (document.getElementsByTagName("video").length) {
    const videos = \[...document.getElementsByTagName("video")\];
    const currentSpeed = videos\[0\].playbackRate;
    const input = Math.min(Math.max(parseFloat(prompt("How fast?\\n0x⟷16.0x", currentSpeed)), 0), 16);
    if (typeof input === 'number' && !isNaN(input) && input !== currentSpeed) {
      videos.forEach(v => v.playbackRate = input);
    }
  } else {
    console.log("Can't find a video.");
  }
};
```

![](images/save-1.png)

The Name and URL fields

When you're watching a YouTube video, you can click the bookmarklet you just made, and it will let you type in the speed.

![](images/use-1.png)

## Skipping Ads

Here's another version of the code that just toggles the speed between 1x and 16x. If an ad is playing (even an unskippable one), you can play it at 16x to get through it quickly.

I use this as the Name: ⏭️

And here's the code for the URL:

```javascript
javascript: {
  if (document.getElementsByTagName("video").length) {
    const videos = \[...document.getElementsByTagName("video")\];
    const currentSpeed = videos\[0\].playbackRate;
    videos.forEach(v => v.playbackRate = currentSpeed == 16 ? 1 : 16);
  } else {
    console.log("Can't find a video.");
  }
};
```

Here's another one that has a little meter to show the current speed.

```javascript
javascript: {
  if (document.getElementsByTagName("video").length) {
    const videos = \[...document.getElementsByTagName("video")\];
    const currentSpeed = videos\[0\].playbackRate;
    const m = x => 5 \* (Math.log2(x) + 4) + 1;
    const l = "0    ⅛    ¼    ½    1    2    4    8    16";
    const a = i => l.substring(0, m(i)) + "͟" + l.substring(m(i));
    const input = Math.min(Math.max(parseFloat(prompt(a(currentSpeed), currentSpeed)), 0), 16);
    if (typeof input === 'number' && !isNaN(input) && input !== currentSpeed) {
      videos.forEach(v=>v.playbackRate = input);
    }
  } else {
    console.log("Can't find a video.");
  }
}
```

Here's one that just sets the playhead to the end of the video.

```javascript
javascript: {
  let v = document.getElementsByTagName("video")\[0\];
  v.currentTime = v.duration;
}
```