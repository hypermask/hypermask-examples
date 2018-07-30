# Basic HTML Example

Play around with this example on [CodePen](https://codepen.io/hypermask/pen/gvadRv?editors=1010)

Don't want to do all the crazy boilerplate involved with setting up a "modern" javascript application? No problem.

You can stick to the age-old, tried and true, trusty `script` tag.

Just embed the latest version of Web3 and the HyperMask core library and you'll be ready to set sail.

```html
<script src="https://cdn.rawgit.com/ethereum/web3.js/1.0/dist/web3.min.js"></script>
<script src="https://unpkg.com/hypermask@1/dist/index.js"></script>
<script>
if (typeof web3 !== 'undefined') {
    window.web3 = new Web3(web3.currentProvider);
} else {
    window.web3 = new Web3(HyperMask.wrapProvider(new Web3.providers.HttpProvider("https://ropsten.infura.io/")));
}
```
