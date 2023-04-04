# micro-frontend-react
Module Federation is a new feature introduced in Webpack 5 that allows developers to share code between multiple applications at runtime. This means that different applications can use the same codebase, without the need to duplicate it, which can greatly reduce the size of the final bundle.

This project is an example of how to implement Module Federation in a React app. It demonstrates how to use Module Federation to share code between a main app and a remote app. The main app is responsible for rendering the UI, while the remote app provides a shared component.

The goal of this project is to provide developers with an example of how to use Module Federation in a React app, and to help them understand how it can be used to improve the performance and maintainability of their codebase.

In this App I create comman navbar for remote and host app , in host app you remotely add navbar host app if you change navbar in remote app and deploy it automatically change in hot app .that's a magic of Module Federation . it helps in build micro-frontend app that share comman component.