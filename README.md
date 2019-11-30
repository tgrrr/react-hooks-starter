
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

## Deploy TODO:

- `yarn run build` for production
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Reference

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)


## And a few added extras:

TODO:

### Data and State
- [ ] [axios]
- [ ] [react-hooks-global-state]

### Getting around
- [ ] [history]
- [ ] [react-router]

### Styles
- [ ] [@material-ui/core]
- [ ] [styled-components]
- [ ] [styled-system]

### Tests
- [x] [Cypress]
- [ ] [raven-js]
- [ ] [rollbar]

### Debugging
- [ ] [eslint]
- [x] [prop-types]
- [ ] [react-fix-it]
- [ ] [why-did-you-update]

### Useful
- [ ] [react-notifications-component]
- [ ] [uuid]

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