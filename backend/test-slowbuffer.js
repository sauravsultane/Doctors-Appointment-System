import { Buffer } from 'node:buffer';
global.SlowBuffer = Buffer;
console.log("SlowBuffer is:", typeof SlowBuffer);
