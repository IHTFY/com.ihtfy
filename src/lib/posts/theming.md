---
slug: theming
title: "theming"
date: "2022-02-18"
excerpt: 'TODO'
tags: [todo]
---

I remade the calendar maker using Attractions, and it looks pretty nice so far. A few things it's missing are dark mode and grid/layout utilities.

You can use SASS to override the default styles of components, but it doesn't quite work. For example, the [Tabs](https://illright.github.io/attractions/docs/components/tabs) colors can be modified using the `$main`, `$disabled`, and `$off-state` variables, but you can't make it pure black. When I set it, the final computed style is a medium grey, so I can't get the active tab to be brighter than the inactive ones using my dark theme.

There aren't any column/row/grid components, so I've been doing it manually. Maybe I could use some other library. It seems like there's no margin on a lot of elements, e.g. buttons and form elements.

I thought I could use the Table element to display the Events (holidays/birthdays), but the table only accepts and displays text data. I decided to make another function that finds the table and replaces the last column of text with an `img` element whose `src` is the text. This seems to work fine, but maybe I should just have a custom Element that displays the info in a nice container and then stack those items in a flex column. This may make it easier to add click listeners to each event as well.

There was an issue I was having with the dropzone. The box was resizing to the shape of the inner text, which was very short if the wrong image type was dragged. If you hovered over the edge of the dropzone, the box would show the error and shrink the size. But then your mouse wasn't hovering anymore, so it would grow to full size again. Then it would show the error and shrink, etc.

It turns out it was because I was using `display: flex` on most of my elements in the form, including the dropzone. I made a wrapper for the dropzone and set it to `display: block` instead which fixed it.

Also, there aren't many options for changing the CSS of the Attractions components other than color. There's some border radius, but not much size stuff. I'm thinking I may go back to Bulma on future projects.

I've uploaded the new version to [cmaker.ihtfy.com](https://cmaker.ihtfy.com/).
