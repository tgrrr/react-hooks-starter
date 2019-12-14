TODO:
- [ ] Convert to Typescript
    - [ ] proptypes to typescript

- [ ] Router Authentication is WIP
  See: https://blog.logrocket.com/how-react-hooks-can-replace-react-router/
- [ ] Check for duplication between page and routes
- [ ] Sharable links that are SEO Canonical routes with React Helmet 
  See:
  - SEO Canonical routes with Helmet](https://www.creativebloq.com/how-to/build-an-seo-friendly-head-component-for-nextjsreact)
  - [Head component](https://www.creativebloq.com/how-to/build-an-seo-friendly-head-component-for-nextjsreact)
  - [URL parameters tool](https://support.google.com/webmasters/answer/6080548?hl=en&visit_id=637118065178371086-1815002449&rd=1)
  - [Google campaign builder](https://ga-dev-tools.appspot.com/campaign-url-builder/)
  - https://web.utm.io/
  - https://effinamazing.com/blog/manual-utm-tagging-vs-adwords-autotagging/
  - https://easyautotagging.com/features/
  - INTERNAL TRACKING: https://www.smashingmagazine.com/2017/08/tracking-internal-marketing-campaigns-google-analytics/
  - Tracking with only CSS

### Data and State

- [ ] [axios]

### Navigation / Getting around

- [x] [history]
- [x] [react-router]

### Styles

- [x] [styled-components]
- [ ] [styled-system]
- [ ] [@material-ui/core]

### Tests

- [x] [Cypress]
- [ ] [raven-js]
- [ ] [rollbar]

### Debugging

- [ ] [eslint]
- [x] [prop-types]

### Useful

- [ ] [react-notifications-component]
- [ ] [uuid]

---

https://hub.docker.com/repository/docker/tgrrr/cra-docker

### Getting Started

[install `yarn`](https://yarnpkg.com/lang/en/docs/install)

```bash
yarn run start
```

```bash
yarn run setup
```

<!-- docker container ls -a -->
<!-- docker container rm tgrrr/cra-docker -->

- How to build

```bash
docker build . -t tgrrr/cra-docker
```

### How to run with Docker

- Pull `create-react-app` from `docker`

```bash
docker pull tgrrr/cra-docker
docker run -p 8080:80 tgrrr/cra-docker
```

**Note:** including `-p 8080:80` lets us use `localhost:8080`, rather than assigning a random port

### How to run with `yarn`

```
yarn start
```

---


## Getting started

## Install

```js
git clone https://github.com/tgrrr/react-hooks-starter
cd react-hooks-starter
yarn
```

## Development:

`yarn start` or `yarn watch`

Runs the app in the development mode at
[http://localhost:3000](http://localhost:3000)

## Tests

- `yarn test` - tests with [Cypress](http://Cypress.io)
- `yarn run cypress:open` - Opens the interactive cypress tester

[See example recipes](https://github.com/cypress-io/cypress-example-recipes)

### `yarn run cypress:run`

Run cypress tests in terminal

## Deploy - WIP

- `yarn run build` for production
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Netlify

```bash
$ netlify init
$ netlify build
$ netlify deploy
```

this adds the id to `.netlify/state.json`, but I prefer my config in a single file where possible.

1. Add project id:

```yaml
# netlify.toml
[Settings]
  ID = "TODO"
```

2. Set homepage blank

```json
// package.json
"homepage": "."
```

and 

3. Add  `/*  /index.html  200` to  `public/_redirects`

### Reference

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

##### And a few added extras:

[axios]: https://www.npmjs.com/package/axios
[react-hooks-global-state]: https://www.npmjs.com/package/react-hooks-global-state

[history]: https://www.npmjs.com/package/history
[react-router]: https://www.npmjs.com/package/react-router

[@material-ui/core]: https://www.npmjs.com/package/@material-ui/core
[styled-components]: https://www.npmjs.com/package/styled-components
[styled-system]: https://www.npmjs.com/package/styled-system

[raven-js]: https://www.npmjs.com/package/raven-js
[rollbar]: https://www.npmjs.com/package/rollbar

[eslint]: https://www.npmjs.com/package/eslint
[prop-types]: https://www.npmjs.com/package/prop-types
[react-fix-it]: https://www.npmjs.com/package/react-fix-it
[why-did-you-update]: https://www.npmjs.com/package/why-did-you-update

[react-notifications-component]: https://www.npmjs.com/package/react-notifications-component
[uuid]: https://www.npmjs.com/package/uuid

