# My Portfolio
Built with [Create React App](https://github.com/facebook/create-react-app), [Contentful](https://contentful.com) and 
delivered via [Netlify](https://www.netlify.com/)'s global CDN.

![Preview](https://user-images.githubusercontent.com/3363867/59764114-17cc5800-9269-11e9-9f1a-1a3e4125723c.png)

## Workflow
I can add (CRUD) projects (and soon blog posts) I've worked on via Contentful which fires a webhook on changes that triggers
a new build on netlify, which in turn, during the build, downloads all the content from Contentful and then hosts it
in the React app across it's [multi-cloud CDN](https://www.netlify.com/products/edge/). Which also provides prerendering.

Why not [Gatsby](https://www.gatsbyjs.org/)? That's a logical question. I think I'll switch someday soon, but not today.

## Development

```
// Check out the repo
git clone git@github.com:gjrdiesel/portfolio.git

// Install dependencies
cd portfolio && npm install

// Download latest contentful entries:
// Get API key from
// https://app.contentful.com/spaces/<your-space-id>/api/keys
CONTENTFUL_TOKEN=YOUR_TOKEN_HERE node download.js

// Start local dev
npm run start
```

## Deploy

Deployments are triggered by changes to this github repository via [Netlify Github Hooks](https://www.netlify.com/docs/webhooks/) or 
[Contentful Webhooks](https://www.contentful.com/developers/docs/concepts/webhooks/). In other words, they're automatic.
