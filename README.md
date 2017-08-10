# A Polymer Project

## Set-up

Check-out the project to your computer, change to project directory, then run:

```sh
npm install -g gulp bower
npm install
bower install
```

### Development workflow

#### Serve / watch

```sh
gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

It will also watch for changes in the files and automatically reload your browser.

#### Beautify code

```sh
gulp prettify
```

This reformats code to match our desired editor config (single tabs for indentation, linebreaks in the right places, etc.).

You should aim to do this before every Git commit.

#### Run tests

```sh
gulp test:local
```

This runs the unit tests defined in the `app/test` directory through [web-component-tester](https://github.com/Polymer/web-component-tester).

To run tests Java 7 or higher is required. To update Java go to http://www.oracle.com/technetwork/java/javase/downloads/index.html and download ***JDK*** and install it.

#### Build & Vulcanize

```sh
gulp
```

Build and optimize the current project, ready for deployment. This includes vulcanization, image, script, stylesheet and HTML optimization and minification.

## Application Theming & Styling

Polymer 1.0 introduces a shim for CSS custom properties. We take advantage of this in `app/styles/app-theme.html` to provide theming for your application.

[Read more](https://www.polymer-project.org/1.0/docs/devguide/styling.html) about CSS custom properties.

### Styling

1. ***main.css*** - to define styles that can be applied outside of Polymer's custom CSS properties implementation. Some of the use-cases include defining styles that you want to be applied for a splash screen, styles for your application 'shell' before it gets upgraded using Polymer or critical style blocks that you want parsed before your elements are.
2. ***app-theme.html*** - to provide theming for your application.
3. ***shared-styles.html*** - to share styles between elements and index.html.
4. ***element styles only*** - styles specific to element. These styles should be inside the `<style></style>` inside `template`.

  ```HTML
  <dom-module id="my-list">
    <template>
      <style>
        :host {
          display: block;
          background-color: yellow;
        }
      </style>
      <ul>
        <template is="dom-repeat" items="{{items}}">
          <li><span class="paper-font-body1">{{item}}</span></li>
        </template>
      </ul>
    </template>
  </dom-module>
  ```

These style files are located in the [styles folder](app/styles/).

## Unit Testing

This project is configured with support for [Web Component Tester](https://github.com/Polymer/web-component-tester) - Polymer's preferred tool for authoring and running unit tests.

[Read more](https://github.com/Polymer/web-component-tester#html-suites) about using Web Component tester.

## Dependency Management

We use [Bower](http://bower.io) for package management. For tooling, we use npm to manage Node.js-based dependencies.

Components installed by Bower live in the `app/bower_components` directory. This location is specified by the `.bowerrc` file. Many projects which follow Yeoman conventions place the `bower_components` directory outside of the `app` directory and then mount it using a server. This causes problems for tools like [Vulcanize](https://github.com/polymer/vulcanize) and [web-component-shards](https://github.com/PolymerLabs/web-component-shards) which rely on relative paths. We've chosen to simplify things and have `bower_components` live inside of `app` to resolve these issues.
