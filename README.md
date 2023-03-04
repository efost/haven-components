<img width="206" alt="image" src="https://user-images.githubusercontent.com/58239389/222872875-a2068b4b-9f9a-47d1-9b3a-2ef9c11ad75b.png">

Haven's component library is built with React + TypeScript on top of Vite. 

## Development
```bash
$ git clone https://github.com/haven-servicing/haven-component-library.git
$ cd haven-component-library
$ yarn
$ yarn link dist # allows your local version of haven-components to be linkable to another local repo
$ cd PATH_TO_YOUR_PROJECT # change directories to the repo you'd like to use the component library in
$ yarn link haven-components # use your local haven-components repo in this project
$ yarn watch # starts a hot-reloading vite build process
```

## Testing 
We use [Cypress](https://www.cypress.io/) to run component tests.
```bash
$ yarn test-cli
```

## Storybook
```bash
$ yarn storybook
```
