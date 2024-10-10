const { randomBytes } =  require('crypto');

const generateClientMessageId = () => Date.now() + randomBytes(8).toString('hex');

module.exports = generateClientMessageId;
