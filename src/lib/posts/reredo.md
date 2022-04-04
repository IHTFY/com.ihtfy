---
slug: reredo
title: "reredo"
date: "2022-02-16"
excerpt: 'TODO'
tags: [todo]
---

I noticed a little bit ago that the calendar maker site doesn't really need routing. And it's just a static page hosted on GitHub, so I don't really need SvelteKit for server side rendering. I had also had some problems getting any component libraries to install. I think I'm going to start over again just using Svelte, and hopefully I can get this library called [Attractions](https://illright.github.io/attractions/) to work.

It has a nice [FileDropzone](https://illright.github.io/attractions/docs/components/file-dropzone) component and [DatePicker](https://illright.github.io/attractions/docs/components/date-picker). I'll probably just have the settings and data page be [Tabs](https://illright.github.io/attractions/docs/components/tabs) or maybe [Modals](https://illright.github.io/attractions/docs/components/modal).

I think I'll still use [Dexie](https://dexie.org/)/[indexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) for storage.

I've used [MaterializeCSS](http://materializecss.com) several times, and it's a fast way to style a page built without any framework. It also has a [Date Picker](https://materializecss.com/pickers.html) component. The library has never been updated though, and there are a few bugs I've found while working with it. For example, long months have the last letters cut off; this is probably fixable with some simple CSS, but there's little stuff like that all over, e.g. missing margins/padding in the header component.

I've used [Bulma](https://bulma.io/) just once I think - on the [Knight Puzzle](https://frankiemercado.com/2021/03/15/knight/). I think it worked pretty well. I had trouble styling the table, because it requires [SASS](https://sass-lang.com/) to modify the default styles, and I was trying to keep things simply by just using the Bulma CDN. But Bulma seems to have a collection of extensions (I think made by random users) including a [calender](https://wikiki.github.io/components/calendar/). Bulma has a default [File Upload](https://bulma.io/documentation/form/file/) component, but it doesn't support drag and drop which is nice to have.

I think Attractions looks sleek, and I think it has most of what I need.
