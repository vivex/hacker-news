# Demo
https://techient.herokuapp.com/

#About

A CRA App with SSR functionality. Following technologies are used:
 - create-react-app
 - express
 - redux
 - scss

Usages custom logic + express + redux for *SSR*

For ServerSide API Call use following syntax in root component of your route : 

```js
const Demo = () => {
  return <p>Hello</p>
}
Demo.serverFetch = async (dispatch, route) => {
  //make api call
  // dispatch action
}
```

## To Run
```$xslt
npm start
```

## CI 
Using github actions for CI Checkes
```$xslt
https://github.com/vivex/hacker-news/blob/master/.github/workflows/node.js.yml
```

#TODO
 - [ ] Use renderToNodeStream with express 5 to verify http stream benefits. 