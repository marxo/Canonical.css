# Canonical.css
Canonical.css is a tailored and pragmatic reset for modern web projects, with support for modern browsers & commonly used elements. I'm a *every byte matters kind of a guy* so this reset, even though it grew out of Normalize.css

## Notes on Normalize.css vs Canonical.css
I'm a *every byte matters* kind of a guy. Normalize.css **is a reset** with the goal of normalizing HTML rendering across browsers. Canonical.css is a reset aimed at providing pragmatic and opinionated yet reversable kickstart for your modern CSS. Starting a web application project, I need `box-sizing: border-box` hack, while I most definitely don't need a `<dfn>` style definition. A vast majority of developers will need the same. Every byte matters. Finding this *golden mean* where we're not normalizing the whole HTML but we're integrating common practices is what Canonical.css will strive toward.

## Usage
NPM `npm install canonical.css`

Bower `bower install canonical.css`

Meteor `meteor add marxo:canonical.css`

or simply download the [latest master](https://github.com/marxo/Canonical.css/archive/master.zip) and use the `canonical.min.css` or `canonical.less`
