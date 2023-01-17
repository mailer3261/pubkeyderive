const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    const pubKey = await secp.recoverPublicKey(hashMessage(message),signature,recoveryBit)
    return(pubKey)
}

module.exports = recoverKey;