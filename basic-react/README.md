# Basic React Example

Play around with this example on [CodeSandbox](https://codesandbox.io/s/450zxpzl4).

## How to use this starter project

To use this sample projects as a starting point for developing a React-based Dapp with HyperMask, just follow these instructions.

This demo uses the Parceljs bundler, which is a zero-configuration alternative to Webpack. To install it, run `npm install -g parcel-bundler` (NPM) or `yarn global add parcel-bundler` (Yarn).

Then, run `yarn install` to install dependencies and `yarn start` to start serving from `localhost:6000`.

There is a `TESTING` flag in the code that switches between the Ropsten Test Net and Ethereum Main Net. Set `TESTING` to false if you want to do transactions on the main net (or if you're deploying to production, of course).

## Integrate with existing DApp

The simplest way to integrate HyperMask into your Ethereum DApp is by adding these lines to the beginning of your app:

```javascript
import Web3 from "web3";
import withHyperMask from "hypermask";

// if user has MetaMask/Mist installed, use that instead of HyperMask
if (typeof web3 !== "undefined") {
  window.web3 = new Web3(web3.currentProvider);
} else {
  window.web3 = new Web3(
    withHyperMask(new Web3.providers.HttpProvider("https://ropsten.infura.io/"))
  );
}
```

This code snippet checks for an injected Web3 provider from MetaMask, Mist, or Brave. If one already exists, you should probably use that instead of the wallet HyperMask provisions automatically. If you want to force users to use HyperMask, just overwrite the global `web3` variable like so.

```javascript
import Web3 from "web3";
import withHyperMask from "hypermask";

global.web3 = new Web3(
  withHyperMask(new Web3.providers.HttpProvider("https://ropsten.infura.io/"))
);
```


