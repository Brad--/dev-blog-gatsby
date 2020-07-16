---
title: Making the blog
date: 2020-07-15
path: /making-the-blog
tags:
  - programming
---
I've been wanting to make a blog for awhile, but today's the day I finally stop reading articles and start writing code! Every once in a while I find myself thinking "I should make a blog! I could write about coding, or I could write about vegan food. Either way it would be fun to make a blog."

More often than not, this leads to a couple of hours spent reading about cool new web technologies. I want to make it fast, responsive, easy to author in, and I want to have fun building it. So after all that reading, what did I end up finally using to make this blog, and why?

## What framework did you use?
The first big question to answer is what framework I want to use. I went in knowing that I wanted to use a static website generator so that the site would be super fast and easy to host on something like [Netlify](https://netlify.com/) or [GitHub Pages](https://pages.github.com/). I really like the idea of using GitHub rather than a traditional CMS for such a small project like a personal blog.

I was really only choosing between [VuePress]() (which is built on Vue) and [GatsbyJS](https://www.gatsbyjs.org/) (which is built on React). I pulled down the sample projects of both, and played around with the code to try and get a feel of both. I ended up choosing GatsbyJS, largely because I really like [their docs](https://www.gatsbyjs.org/docs/)!

## Which Headless CMS?
Since I wanted to be able to post new blog entries, I needed something to create and store post assets. For modern static sites, it seems like HeadlessCMS is the way to go, unless I want to spend time and money setting up a database or reverting to using something like WordPress. But that doesn't really fall in line with the idea of a Static Site! Why not just use GitHub as a CMS, and when create new posts by authoring markdown and commiting to Git? Or better yet, using a real headless CMS like [Netlify CMS](https://www.netlifycms.org/) or [Prose](https://github.com/prose/prose/wiki/Getting-Started) to get a real editorial workflow. For today I went with "hand write the markdown" because I want to get this blog up in one evening, but I think Netlify CMS is in my future.

## How do I feel now that I have the blog running?
So far I've really enjoyed the GatsbyJS workflow. It's an easy language to learn with the quality of documentation, and it clearly makes so much sense for a blog. GatsbyJS and Netlify are a perfect pair! Once I had the blog running locally, it was no sweat to publish it to Netlify. I'm excited to start blogging about my experiences as a developer and to keep developing new features for the blog, as the motivation strikes.

I hope you may have learned something, and I hope you have a nice day (or night)!

Brad

