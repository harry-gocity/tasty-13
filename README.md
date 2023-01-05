# Flagship w/ NextJS 13 & Server Components

- The App should preload flags on the server in `app/layout.tsx`
- Because `FlagshipProvider` uses react context, which is not available on the server, 
it is wrapped in a client component in `app/providers.tsx`. The client component receives 
the flags, and passes them with and children.
- The flags are used in `components/feature.tsx`, rendered by `app/page.tsx`. This is a client component
(but doesn't need to be if it wasn't for the render counter hook). 

Starting with `next dev`, going to `localhost:3000` shows a server error when starting the Flagship SDK in `app/layout.tsx`: 

```
error - node_modules/@flagship.io/react-sdk/dist/index.node.js (149:63) @ Object../src/FlagshipContext.tsx
error - TypeError: (0 , _react.createContext) is not a function
    at Object../src/FlagshipContext.tsx (webpack-internal:///(sc_server)/./node_modules/@flagship.io/react-sdk/dist/index.node.js:188:76)
    at __nested_webpack_require_41379__ (webpack-internal:///(sc_server)/./node_modules/@flagship.io/react-sdk/dist/index.node.js:848:47)
    at Object../src/index.tsx (webpack-internal:///(sc_server)/./node_modules/@flagship.io/react-sdk/dist/index.node.js:678:36)
    at __nested_webpack_require_41379__ (webpack-internal:///(sc_server)/./node_modules/@flagship.io/react-sdk/dist/index.node.js:848:47)
    at eval (webpack-internal:///(sc_server)/./node_modules/@flagship.io/react-sdk/dist/index.node.js:855:40)
    at eval (webpack-internal:///(sc_server)/./node_modules/@flagship.io/react-sdk/dist/index.node.js:857:21)
    at Object.(sc_server)/./node_modules/@flagship.io/react-sdk/dist/index.node.js (/Users/harry.talbot/IdeaProjects/_personal/tasty-13/.next/server/app/page.js:2464:1)
    at __webpack_require__ (/Users/harry.talbot/IdeaProjects/_personal/tasty-13/.next/server/webpack-runtime.js:33:42)
    at eval (webpack-internal:///(sc_server)/./app/layout.tsx:6:80)
    at Object.(sc_server)/./app/layout.tsx (/Users/harry.talbot/IdeaProjects/_personal/tasty-13/.next/server/app/page.js:2411:1) {
  type: 'TypeError',
  page: '/'
}
```