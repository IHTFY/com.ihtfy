---
slug: soundcloud-likes
title: SoundCloud Likes
date: 2022-02-03
excerpt: How to archive all your soundcloud likes.
tags: [code, tutorial]
---

<script>
  import CodeBlock from "$lib/components/blog/code-block.svelte";
</script>

SoundCloud is notorious for having songs deleted - often by the original uploader. Most of these songs are not easily found elsewhere on the internet. To download them, you can use a very powerful free tool: [youtube-dl](https://ytdl-org.github.io/youtube-dl/download.html)

On Windows, you can just download the exe. If you double-click on the file, it will just have a black window popup and then close; that's because it's a command line tool. To use it properly, you can either use the Command Prompt (press the windows key, then type "cmd"), or my preference, PowerShell (windows key, then type "powershell").

Now if you drag the exe file onto the terminal and press enter, you'll see:

`Usage: youtube-dl.exe [OPTIONS] URL [URL...]`

youtube-dl.exe: error: You must provide at least one URL.
Type youtube-dl --help to see a list of all options.

That's because you need to give it a URL to download. In our case, we want to use our SoundCloud Likes playlist. Checkout the huge list of [supported sites](https://ytdl-org.github.io/youtube-dl/supportedsites.html); basically everything but paid streaming sites like Netflix etc.

My SoundCloud likes are at [https://soundcloud.com/IHTFY/likes](https://soundcloud.com/IHTFY/likes), so you would just need to change your user ID.

Before you do that, where are the files going to be downloaded to? By default, the terminal opens to `C:\Users\YourName`. If you want to download to a different folder, you could make one (or find an existing one) and navigate your terminal to it using the `cd` command which stands for "change directory".

Type `cd` then add a space and then drag the folder onto the terminal. Press enter, and you'll see the pwd (present working directory) is now the location of that folder.

Now, if you were to drag the youtube-dl.exe onto the terminal, add a space, then add the SoundCloud Likes URL, it would start downloading all of your liked songs into that folder.

There's a bit more we can do to automate this. We could make a batch file (.bat) that when double-clicked, automatically downloads all of your likes to the specified folder.

Create a new text file, and name it `SCBackup.bat`

Add the following code inside the file, replacing `SOUNDCLOUD_USERNAME` and `PATH_TO_YOUR_MUSIC_FOLDER`.

<CodeBlock lang="batch" filename="SCBackup.bat">

```batch
@ECHO OFF
SET uid=SOUNDCLOUD_USERNAME
SET dest=PATH_TO_YOUR_MUSIC_FOLDER\%uid% soundcloud likes\
ECHO saving in %dest%
SET ytStr="%dest%%%(uploader)s - %%(title)s (%%(id)s).%%(ext)s"
ECHO %ytStr%
START youtube-dl.exe https://soundcloud.com/%uid%/likes --output %ytStr% -ciw
```

</CodeBlock>

You also need to change the `youtube-dl.exe` to the full path of the exe, or you can add `youtube-dl` to your Windows Path.

Press Windows key, then type "environment". You should see "Edit environment variables for your account". Click that, and it will open up a window with 2 tables. In the top one, User variables, click the `Path` variable, then click `Edit...`.

Next, you want to add the folder that contains the `youtube-dl.exe` file. Click `Browse`, and find that folder, then click `OK` to close each window.

Now the terminal will be able to find `youtube-dl.exe`, and you can refer to it without using the full path to the file.

Now, you can periodically run that file to download your liked songs from SoundCloud. By default, `youtube-dl` will download from newest to oldest, so once you start seeing

> ... has already been downloaded

you can stop the script by closing the window. Note, you'll want to keep all your songs in that folder so that `youtube-dl` can tell when it's already downloaded a file; there's no other history built in.
