---
slug: calendar-progress
title: calendar progress
date: 2022-02-12
excerpt: Working on a calendar maker.
tags: [code]
---

I've been working on the calendar maker the last two days. You can see the current progress [here](https://calendar.ihtfy.com/data). It's still has a long way to go. I've been working on componentizing and getting image uploading to work. I originally tried using filepond as the image uploading component, but after a lot of issues, I realized that was better suited for uploading to a remote server. Now, I'm using a svelte version of [dropzone](https://github.com/thecodejack/svelte-file-dropzone). It seems to work alright, although the css styling of the component gives me some trouble.

I still need to get the loading and saving events worked out. Then I'm going to used indexedDB, or more likely dexie which is a wrapper for indexedDB. [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) is like localStorage in the browser; it persists between sessions. It's supposed to be better for larger data like images. For now, I'm still using base64 strings to store the images, but I may move to blobs, since indexedDB supports that too.
