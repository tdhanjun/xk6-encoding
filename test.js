import { TextEncoder } from 'k6/encoding';
const encoder = new TextEncoder("utf-8");
const encoded = encoder.Encode("Your text here");
console.log(encoded);