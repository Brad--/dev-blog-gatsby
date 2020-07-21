---
title: Initial Gatsby Impression
date: 2020-07-20
path: /initial-gatsby-impression
tags:
  - programming
---
I've only been using Gatsby (and really, React) for a couple of days, but it's already got me hooked!

## Where's My Data?
So far, my favorite thing I've learned while developing with Gatsby is GraphQL. This is my first foray into the world of GraphQL, despite it's insane popularity. I think I get why, now!

I've been using Angular for about 4 years at work, so that's where I'm currently most comfortable, but querying data in Angular seems so rough and messy compared to the clean definition of GraphQL. To be fair, I haven't been using quite the same caliber of API's. All of my GraphQL so far comes from querying the Markdown which is used to define these blog posts. Despite the simple use case though, I can see a huge advantage of using GraphQL compared to a standard API service in Angular: **the query is defined in the same file as the content that consumes it!**

At first I was a bit put-off by seeing the graphql query on every page, but now it all makes sense. No more n-tiers of property bindings to get your data from the top-level page component all the way down to the smallest component, instead just make the query for only the things you need, right in the component!

Far too many times I've had to chase a bug which ended up being "the data isn't there yet," because somewhere along the chain from "Request is made to server" to "the graph component" a state-guard (say, the conditional wasn't working here: `<myComponent *ngIf='data.requestHasFinished'>`) so the component was trying to render without data, causing Angular to explode in a fit of rage. 

It doesn't seem like that class of bug even exists here.

## Hydration
An assumption I made about GatsbyJS when I first picked it up was "This is going to be good for generating static sites, but doesn't look great for something with a ton of API data." Thankfully I was wrong.

Gatsby takes advantage of the concept of [React Hydration](https://www.gatsbyjs.org/docs/react-hydration/) to allow as much API usage and fancy data shenanigans as any other Single Page Application. My inital assumption of "gatsby ships static pages" was wrong, it's more along the lines of "gatsby makes as much of your page static as it can," and you can fill in the blanks after the page loads. In short, Hydration uses the React DOM to make changes to an already-rendered React DOM. All you need is the updated content and a good page-identifier and you're on your way to a hydrated Gatsby page!

You can see this in [my Email Hider component](https://github.com/Brad--/dev-blog-gatsby/tree/develop/src/components) for a simple example (which doesn't use an API, it's just an `onClick`). I figured this out with the help of [MarvelousWololo's](https://dev.to/marvelouswololo/how-to-server-side-render-react-hydrate-it-on-the-client-and-combine-client-and-server-routes-1a3p) post about hydration.


I've been having a good time learning React and Gatsby, and I'm really looking forward to digging deeper.

Brad

### Shoutout
Unrelated to the rest of the post, I added some SVG Icons to the site today, courtesy of [Tabler Icons](https://tablericons.com/), which has a big library of copy-pastable SVGs which are all amazing. 

Thanks to [Csaba](https://twitter.com/csaba_kissi) and [Pawel](https://twitter.com/codecalm) for Tabler!