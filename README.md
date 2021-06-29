# create-renci-app


## Quick Overview

```bash
$ create-renci-app project-name
$ cd project-name
$ npm start
```

## Getting Started

There are two options to get going:

1. Install `@renci/create-renci-app` globally,

```bash
$ npm i -g @renci/create-renci-app
```

and create a new application with the name `project-name`.

```bash
$ create-renci-app project-name
```

2. Use `npx` to create a new application with the name `project-name`.

```bash
$ npx @renci/create-react-app project-name
```

Each of these will start a new React application based on [https://github.com/RENCI/react-starter](RENCI/react-starter), which contains branding resources for RENCI and UNC by default as they are often needed when building RENCI web applications.


## Development

Now that the application is all configured, we can start start a local development server (`webpack-dev-server`) rrom the `path/to/project-name` with `npm start`. This dev environment utilizes [hot-module-replacement](https://webpack.js.org/guides/hot-module-replacement/) and [react-refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin) for optimal developer experience.

## Production

To build a production-ready `create-renci-app` application, run `npm run build` from the project directory. To build an easily debuggable production build, use `npm run build-dev`.

## References

- [Webpack](https://webpack.js.org/)
- 
