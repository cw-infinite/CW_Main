npm init gatsby
npm install
npm run develop
npm install gh-pages --save-dev


Since Gatsby creates build file named "public"
we need to change the pathPrefix in gatsby config file. 
```
module.exports = {
  pathPrefix: "/reponame",
}
```

package.json
{
  "scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  }
}