# Eric Johnson's Portfolio Site, NOW IN REACT!

## Introduction

I wanted to do a project in React and I ran across [Gatsby](https://www.gatsbyjs.org/), Facebook's React-based 
static site generator. Gatsby looked like a slick project with a lot of traction, and it seemed like a good fit to 
convert my portfolio from a [PHP architecture](https://github.com/onetwothreebutter/ericdjohnson) to a React architecture.

The conversion to Gatsby/React went relatively smoothly and helped me modularlize my code further. I did run into a 
couple hiccups when trying to use Sass files which imported other Sass files containing relatively pathed images . 
I found a solution using a Webpack loader called [resolve-url-loader](https://github.com/bholloway/resolve-url-loader), 
and [I created an issue](https://github.com/gatsbyjs/gatsby/issues/3665) with the 
gatsby-plugin-sass plugin.


## Local Setup
You can clone this repo and run
* `npm install`
* `npm install -g gatsby cli`
* `gatsby develop` (starts local server)

You may have to update your node/npm to a recent version. Here is a link to [Gatsby's docs](https://www.gatsbyjs.org/docs)
for further reading/help.

## CSS Structure
I used Sass for my CSS pre-processor. I plan to integrate CSS variables in the future, but for now haven't used them.

I decided to try a form of BEM style naming for my CSS classes where I don't extend base classes, but I create mixins. 
The final CSS is much cleaner and readable using mixins.

For example I created site-wide mixins like
```sass
@mixin site__banner
  //...banner css...
  
.site__banner
  @include site__banner()
```
If you want to just use the default `site__banner` styles you can use the `site__banner` class, but if you need to tweak
the banner CSS on a particular page, you can do

```sass
.about-page__banner
  @include site__banner()
  //...custom css...
  ```
  
I like this approach because it gives you an easily searchable and authoritative source for all the CSS for a particular
 element. It also avoids a lot of abbreviated modifier CSS classes like `site__banner f-large no-bg red`. And you can easily
 override CSS if you need to just by putting it after your includes.
 
 However, I haven't run this method by anyone else, so it could have some fatal flaws that I'm not seeing yet.
 
 ## React
 (more details forthcoming...)
 
 ## Gatsby
 (more details forthcoming...)
 
 ## Testing
 Jest and GhostInspector (more details forthcoming...)

