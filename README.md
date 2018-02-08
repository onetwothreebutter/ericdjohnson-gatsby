# Eric Johnson's Portfolio Site, NOW IN REACT!

##Introduction

I wanted to do a project in React and I ran across [Gatsby](https://www.gatsbyjs.org/), Facebook's React-based 
static site generator. Gatsby looked like a slick project with a lot of traction, and it seemed like a good fit to 
convert my portfolio from a PHP architecture to React architecture.

The conversion to Gatsby/React went relatively smoothly and helped me modularlize my code further. I did run into a 
couple hiccups when trying to use Sass files with imported Sass files that reference an image relative to the imported 
Sass. I found a solution using a Webpack loader called [resolve-url-loader](https://github.com/bholloway/resolve-url-loader), 
and [I created an issue](https://github.com/gatsbyjs/gatsby/issues/3665) with the 
gatsby-plugin-sass plugin.


##Local Setup
You can clone this repo and run
* `npm install`
* `npm install -g gatsby cli`
* `gatsby develop` (starts local server)

You may have to update your node/npm to a recent version. Here is a link to [Gatsby's docs](https://www.gatsbyjs.org/docs)
for further reading/help.

