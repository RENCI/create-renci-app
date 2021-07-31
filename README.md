# create-renci-app

Use this NPM command line module to bootstrap a React application, with RENCI branding included.

### Quick Start

```bash
$ npm i -g @renci/create-renci-app
$ create-renci-app project-name
$ cd project-name
$ npm start
```

## Usage

### 🚀 Getting Started

There are two options to begin:

1. Install `@renci/create-renci-app` globally with

```bash
$ npm i -g @renci/create-renci-app
```

and use your newly installed `create-renci-app` to create a new application with the name `project-name` by executing the following command.

```bash
$ create-renci-app project-name
```

2. The second option is to use [npx](https://nodejs.dev/learn/the-npx-nodejs-package-runner).

```bash
$ npx @renci/create-renci-app project-name
```

Each of the above methods will create a new React application based on [RENCI/react-starter](https://github.com/RENCI/react-starter). This application boilerplate contains an initial configuration common to the many of the web applications built at/by/for RENCI.

The following are set up by default:

- Webpack 5
- Babel
- CSS
- SCSS
- PostCSS
- Source Maps
- Hot module replacement
- React
- React Refresh
- Image support (png, jpg, jpeg, gif, svg)

In addition, this project will contain the branding resources for RENCI and UNC, which we also often require.

### 🚧 Application Development

Once your application is bootstrapped, you're ready to move into the `project-name` directory to begin development. Start a local development server from `path/to/project-name` by running `npm start`.

Note that this development environment utilizes [hot-module-replacement](https://webpack.js.org/guides/hot-module-replacement/) and [react-refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin) for optimal developer experience.


### 🎁 Building for Production

To build a production-ready `create-renci-app` application, run `npm run build` from the project directory. the bundled files will be exported to the `dist` directory.

To build an easily debuggable production build, use `npm run build-dev`.


### 📚 References

- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)

---

## Contributing

Please create an issue and/or submit a PR to help make this more versatile for RENCI's use cases.

### 🚧 Local Development of `create-renci-app`


Clone this repo.

```bash
# HTTPS
$ git clone https://github.com/RENCI/create-renci-app.git
# or SSH
$ git clone git@github.com:RENCI/create-renci-app.git
```

Commands from here on are from within the `create-renci-app` directory. 

First, we tell Node to use the current directory's code when `create-renci-app` is invoked on your machine.

```bash
$ npm link
```

Test this symlink was created as expected with `which`.

```bash
$ which create-renci-app
```

In the output from the above command, a successful symlink has your current working directory on the right-hand side of the `->` symbol.

Now that this `link` in place, as you change and test code, the `create-renci-app` command can be run (from anywhere) on your machine to execute the code that lives in your development directory.

### Changelog

**0.3.0** : use degit to grab code
**0.2.0** : add framework select when cli runs