var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('a1a0a2a3'),
  addressVersion: 0x76,
  privKeyVersion: 0xf6,
  P2SHVersion: 0x1c,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('71927e0913d9df4a84afc62789fc189ad97ac2baa61b100c6bf7f5d661050000'),
    merkle_root: hex('e9b87d9d9d2527da7cd5b05c59a6c63865f194d1e251778b720e6ce4e32daa5b'),
    height: 0,
    nonce: 987160,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1401045631,
    bits: 504365055,
  },
  dnsSeeds: [
    'piggynodes.piggy-coin.com',
    'piggynodes.piggyfacts.com',
    'piggynodes.blockpunk.com',
    'piggynodes.neurocis.me'
  ],
  defaultClientPort: 54481
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
