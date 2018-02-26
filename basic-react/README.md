# Basic React Example

Play around with this example on [CodeSandbox](https://codesandbox.io/s/81ooko0qnl). 

The simplest way to integrate HyperMask into your Ethereum DApp is by adding these lines to the beginning of your app:

```javascript
import Web3 from 'web3'
import withHyperMask from 'hypermask'

if (typeof web3 !== 'undefined') {
  global.web3 = new Web3(web3.currentProvider);
} else {
  global.web3 = new Web3(withHyperMask(new Web3.providers.HttpProvider("https://ropsten.infura.io/")));
}
```

You'll want to first install `web3` and `hypermask` through NPM or Yarn (or whatever else if there's a hipper package manager du jour). 

