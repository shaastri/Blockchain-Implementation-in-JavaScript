const express = require('express');

const Blockchainapp = express();

Blockchainapp.get('/',(req,res) => res.send('I am modified response of the project')); 

Blockchainapp.listen('5000',() => console.log('Server started at port number 5000'));