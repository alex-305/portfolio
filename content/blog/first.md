---
title: "Making my portfolio website"
tags: ["For Fun", "Javascript", "Vue.js"]
date: "2024-07-25"
pin: true
---

### Making of
&emsp;Making this portfolio website was a very challenging yet fun endeavor. 
Every time I make a new project, I learn something new.
This one was no exception. 
I also genuinely feel like my mindset on programming has changed slightly since working on this project.
<br><br>

### Early Stages

&emsp;When I first began work on this website, I thought of it like many other projects I had worked on. 
I first thought about what I wanted. I wanted a place to display my projects and also where I could make blog posts.
In my mind, this meant let's create an sql database and a backend that communicates that databases' contents to the frontend.
I quickly realized [(thanks to reddit)](https://www.reddit.com/r/webdev/comments/1e52gps/should_i_host_my_content_statically_or_with_an_api/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button) that that was not the best way to go about things. 
Some problems, such as this one, don't require the most advanced solution but rather the one that works and gets you up and running relatively fast. 
Thus, I quickly started to scour the internet for better solutions.
I have been using Vue.js for about a year and have learned Nuxt pretty well too. So when I found [Nuxt/Content](https://content.nuxt.com/), I knew this was the perfect solution.
<br><br>

### Learning Nuxt/Content for static site generation

&emsp;Using Nuxt/Content was very straightforward because the documentation was very easy to read and understand.
I love how simple it makes it for me to post new blogs, add new projects. My blogs are stored as markdown files in a /content/blog directory. My projects are stored in a projects.json file as an array that I just add to. It was very important to me that the process of adding new projects and blogs would be straightforward and I believe I accomplished that.
<br><br>

### What's next
&emsp;I now consider this portfolio website ready for production. This, however, doesn't mean it's done. There's still a lot of little features I want to add and some bugs I need to fix. I want to make the chips clickable to filter and see only content that relates to those chips. I also want to add more CSS animations to the website because aesthetics matter. Lastly, I want to make the website better on smaller devices.