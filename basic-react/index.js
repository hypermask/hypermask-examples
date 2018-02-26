import React from 'react';
import { render } from 'react-dom';

// import Web3 from 'web3'
import withHyperMask from 'hypermask'

if (typeof web3 !== 'undefined') {
  global.web3 = new Web3(web3.currentProvider);
} else {
  global.web3 = new Web3(withHyperMask(new Web3.providers.HttpProvider("https://ropsten.infura.io/")));
}


const App = () => (
  <div>
    <h2>HyperMask Demo</h2>
    <button onClick={async e => {
      let accounts = await web3.eth.getAccounts();
      alert(JSON.stringify(accounts));
    }}>List Accounts</button>
    <button onClick={async e => {
      let accounts = await web3.eth.getAccounts();
      web3.eth.sendTransaction({
        from: accounts[0],
        to: '0x8B4867203bb8e2e742E8C4Bed883faE5099C3665',
        value: web3.utils.toWei('0.5', 'ether'),
      })
        .on('transactionHash', e => console.log('tx hash', e))
        .on('receipt', e => console.log('receipt', e))
        .on('confirmation', e => console.log('confirmation', e))
        .on('error', e => console.error('error', e))
    }}>Send Money</button>
  </div>
);

render(<App />, document.getElementById('root'));
