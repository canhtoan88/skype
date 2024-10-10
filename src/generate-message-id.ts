import { randomBytes } from 'crypto';

const generateClientMessageId = () => Date.now() + randomBytes(8).toString('hex');

export default generateClientMessageId;
