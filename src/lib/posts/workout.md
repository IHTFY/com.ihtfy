---
slug: workout
title: workout
date: 2021-03-16
excerpt: I made a workout tracker
tags: [code, project]
---

## [workout.ihtfy.com](https://workout.ihtfy.com)

A couple of months ago, I made a website to track some basic calisthenics:

- Situps
- Squats
- Pushups
- Planks
- Pullups

The goal was to motivate myself to merely continue exercising. In the past, I would often try to do a set number each day, or try to increase some metric each workout. The goal here is simply to beat your average. The average is total reps divided by total days, so if you take a break, you'll see your average start to decay. It also means you won't have to keep up with an exponentially growing goal.

## Adding and Subtracting Reps

![workout gif](https://github.com/IHTFY/workout/blob/main/gifs/dayN.gif?raw=true "Adding and Subtracting Reps")


Originally, I was just using a spreadsheet to type in the reps as I completed them. This worked, but I wanted to have buttons that I could click rather than backspacing and retyping each number. There are `+5` and `-1` buttons for each exercise, so you can easily "add nickels" and "subtract pennies" to get your exact count quickly.

The data is stored in your browser's `localStorage` which persists when you restart your browser or computer, but it doesn't sync across devices.

## Show or Hide Lines

![Toggle Lines](https://github.com/IHTFY/workout/blob/main/gifs/toggle.gif?raw=true)


You can toggle different exercises on and off, but note that the Average line is still using the original y-axes scale; its scale is locked to the default behind the scenes.

There is an option to manually edit the data points. It uses JSON format, so be careful to follow the pattern and not add extra commas, brackets, or leading zeros.

## Edit the Data

![](https://github.com/IHTFY/workout/blob/main/gifs/edit.gif?raw=true)


[Try it out](https://workout.ihtfy.com/), or see the [source code](https://github.com/IHTFY/workout)
