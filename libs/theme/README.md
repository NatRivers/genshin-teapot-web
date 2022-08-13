# theme

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test theme` to execute the unit tests via [Jest](https://jestjs.io).

## Overview

The `theme` library exposes an MUI theme configuration and a `ThemeProvider` that can be used across `geapot` web applications

See the official documentation for more info: https://mui.com/material-ui/customization/theming/#main-content

To use, simple wrap your web application in the `ThemeProvider`:

```js
import { ThemeProvider } from '@geapot/web/theme';

export const App = () => (
  <ThemeProvider>
    <YourApp />
  </ThemeProvider>
);
```
