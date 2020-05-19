---
slug: change-css-safari-only
title: Change CSS rules only in Safari
subtitle: How to apply css rules to safari only
author: "FabioRosado"
date:   2020-05-16 09:20:02 +0000
categories: SASS/CSS
category_icon: fab fa-sass
tags: Featured
image: ../images/safari_only.jpg
excerpt: How I came across the need to set a css rule to apply only to Safari and which media queries combination will allow that.
---

While working on [Thumbs Up News](http://thumbsupnews.net), I've noticed a strange UI bug that happened only on Safari, when the screen was smaller than 900px height-wise. All the other browsers where okay, but the subscribe button was broken. The border was pushed up outside the area of the button and was now between the two elements of the menu. This only happened when a user clicked the *categories* button and the sub-menu expanded. I'm assuming that this happens because Apple wants space for its bottom menu?

The mobile menu is set on a fixed position. It seems that Safari will change either the padding, the margin or just some border rules when that fixed element doesn't have enough space vertically to show some space under the last element. My first thought was to use the `-webkit` rule to increase the padding on the button. Using that rule fixed the issue on Safari but broke on Chrome and this is when my search on how to apply CSS rules to a specific browser started.

After searching for a while, I've come across this article written by Ryan - [CSS3 Media Query to target only Internet Explorer (from IE6 to IE11+), Firefox, Chrome, Safari and/or Edge](https://www.ryadel.com/en/css3-media-query-target-only-ie-ie6-ie11-firefox-chrome-safari-edge/), if you scroll down you come to this little hack that works on Safari 10.1+.

```css
@media not all and (min-resolution:.001dpcm) {
    @media {
        .safari10 {
        color:#0000FF;
        background-color:#CCCCCC;
        }
    }
}
```

I am using Sass on Thumbs Up News and that means I can't have an empty `@media` rule. But this was a great starting point for coming up with a solution. I've removed the empty media query to see if the rule would work on Safari and not on any other browser. Surprise, surprise, it worked! Now I decided to play around with the media query rule a bit more, to see what works and what doesn't work. 

The Safari only rule hack has two parts. You need to use a unit that is not supported by Safari - `dpcm`, `dpi`, `dppx` and you need to set that media query to `not all`. The _not all_ rule is important so chrome doesn't pick it up.

## The solution

After testing different things and playing around with the media query, I've come to the final solution. I've also added a rule to trigger the CSS only when the screen is smaller than 900px high, because we don't want the menu to be broken on a larger screen.

```css
@media not all and (max-height: 899px) and (min-resolution:.1dpi) {
    .safari-only {
    -webkit-padding-after: 1.7rem;
    }
}
```

That's all there is to get a media query work on Safari only. I'm still wondering why this trick works and would love to know why, so if you know the answer please let me know!
