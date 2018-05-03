import IOTA from 'iota.lib.js';

const iota = new IOTA({
    'host': 'http://nelson1.iota.fm',
    'port': 80
});
//dummy seeds
const seed_A = 'QJTUBGWWIZBTERDPVBOEZDREYRXXSVB9UUNRRZPXLMFLUDOQFCZEKQPYWSVLWYOYMOWJZXCBTJQBTZMRV';
const seed_B = 'HSDUACNELMBFJPJSSFQCRYLSDVUPVLPHELICBQROJSQTKZUXLEZOYMYYWLSCM9ROYZIATRNUSNQQJLV99';

iota.api.getNewAddress(seed_A, (error, result)=>console.log(error, result));
iota.api.getNewAddress(seed_B, (error, result)=>console.log(error, result));
