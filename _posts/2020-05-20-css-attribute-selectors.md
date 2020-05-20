---
layout: post
title:  "CSS attribute selectors"
date:   2020-05-20 02:05:00 +0700
categories: article
author: mati
excerpt_separator: <!--more-->
references: 
    - link: https://gist.github.com/emmabostian/ed933bc7f9711acdc565f42f1b159407
---
Seven different types of CSS attribute selectors
<!--more-->

```css
/* This attribute exists on the element*/
[value]

/*This attribute has a specific value of cool*/
[value='cool'] 

/*This attribute value contains the word cool somewhere in it*/
[value*='cool'] 

/*This attribute value contains the word cool in a space-separated list*/
[value~='cool'] 

/*This attribute value starts with the word cool*/
[value^='cool'] 

/*This attribute value starts with cool in a dash-separated list*/
[value|='cool'] 

/*This attribute value ends with the word cool*/
[value$='cool'] 
```