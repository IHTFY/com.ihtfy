---
slug: livestreams
title: Livestreams
date: 2022-02-04
excerpt: How to save livestreams.
tags: [code, tutorial]
---

<script>
  import Image from "$lib/components/base/image.svelte";
  import CodeBlock from "$lib/components/blog/code-block.svelte";
</script>

This is somewhat related to my [previous post](https://blog.ihtfy.com/post/soundcloud-likes/) about downloading all of my SoundCloud liked songs. I have another batch file that I use to save livestreams. It doesn't work for YouTube livestreams and probably not Twitch either. Often news sites or other random sites will work.

Go to the stream and open your internet browser's developer tools - in Chrome, `ctrl` + `shift` + `j`. Click the "Network" tab. You can optionally filter to the "Fetch/XHR" traffic as well. Now, refresh the page and click play on the video if necessary. You will hopefully find a file that ends in .m3u8. Common filenames are `index.m3u8`, `playlist.m3u8`, or `manifest.m3u8`. Sometimes the file extension is just .m3u.

This is a playlist file which contains a list of "links" to the most recent chunks of video from the livestream. Often it will contain 3-5 chunks, and gets updated every few seconds. If you click on the file once, then click on the "Response" or "Preview" tab, you'll see the contents of the file. For Example:

<Image
  path="posts/{slug}"
  filename="m3u8-snapshot"
  figcaption="network"
  alt="network"
/>

An m3u8 file

In this case, the individual video chunks are .ts files. Each chunk is 2 seconds long. The path to the files are relative, because they don't start with "https" or a valid URL. This is fine, but it means we can't simply download the .m3u8 and use it because these .ts files will not be found. We'll use a link to this m3u8 file instead.

Right click on the `index.m3u8` > Copy > Copy link address. Save this for later.

We're going to make a batch file that takes an URL to an m3u8 file and saves a video, but first we'll need to have [FFmpeg](https://ffmpeg.org/download.html) installed.

FFmpeg is another command line tool to convert videos and tons of [other manipulation](https://ffmpeg.org/about.html). It's free, very powerful, and used in almost every video conversion tool you've ever used.

I'm on Windows, so I downloaded the .exe. I would recommend putting it in your Path again. Instructions for that are at the bottom of my [SoundCloud post](https://blog.ihtfy.com/post/soundcloud-likes/). Adding the folder with the ffmpeg.exe will allow you to run FFmpeg by typing `ffmpeg` in the command line. It's possible the installation will add it to your path anyway, but you may need to restart your computer for it to take effect.

Next, we'll make the batch file. Make a new text file and add this inside of it:

<CodeBlock filename="streamDL.bat" lang="batch">

```batch
@ECHO OFF
SET /p url=Stream Link: 
SET /p name=Filename: 
ECHO saving in downloads
START ffmpeg -protocol\_whitelist file,http,https,tcp,tls,crypto -i "%URL%" -codec copy "C:\\Users\\Frankie\\Downloads\\%name%.mkv"
```
</CodeBlock>

You can change the path on the last line. The `%name%` is a variable which comes from the prompt in line 3. I'm saving as an `mkv` file, but you could change this to mp4 or something else; from what I recall, it may be faster to save as an mkv.

Save that text file as a `.bat` file, like `streamDL.bat`. Now if you double-click it, it will as you to paste in the stream link that you copied before. Next add a filename - no file extension needed. Then it runs the ffmpeg command:

<CodeBlock filename="streamDL.bat" lang="batch">

```batch
ffmpeg -protocol\_whitelist file,http,https,tcp,tls,crypto -i "%URL%" -codec copy "yourFilename.mkv"
```
</CodeBlock>

The important part here is the `-protocol_whitelist file,http,https,tcp,tls,crypto` argument with lets FFmpeg read the .ts files using https or http.

FFmpeg will automatically keep checking the m3u8 file and get the new ts files while the stream is running. If you go to the downloaded video file, you can refresh windows explorer and see that the file size is increasing.
