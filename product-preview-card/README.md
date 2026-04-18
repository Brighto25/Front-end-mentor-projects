# Frontend Mentor - Product Preview Card Component Solution

This is my solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Product Preview Card](./screenshot.jpg)

### Links

- Live Site URL: [https://brighto25.github.io/Front-end-mentor-projects/](https://brighto25.github.io/Front-end-mentor-projects/product-preview-card/)
- Frontend Mentor Solution: [Add solution URL here](https://your-solution-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

One of the biggest things I learned in this project was how border-radius and overflow: hidden work together. I spent a while trying to get the card corners to round correctly and kept getting unexpected results until I realized that overflow: hidden on the parent container is what actually clips the child elements to respect the rounded corners.

.card-container {
  border-radius: 1rem;
  overflow: hidden; /* this is the key! */
}

I also got more comfortable with CSS media queries and building a mobile-first layout that adapts cleanly to desktop using flexbox.

@media (min-width: 1280px) {
  .card-container {
    flex-direction: row;
  }
}

### Continued development

- I want to get more comfortable with CSS Grid
- I plan to keep building more Frontend Mentor challenges to sharpen my HTML & CSS skills
- I'm also currently learning React and plan to start incorporating it into future projects

## Author

- Frontend Mentor - [@Brighto25](https://www.frontendmentor.io/profile/Brighto25)
- Twitter - [@BAddaney12439](https://www.twitter.com/BAddaney12439)
