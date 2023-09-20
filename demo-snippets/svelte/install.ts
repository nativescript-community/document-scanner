import Basic from './Basic.svelte';

export function installPlugin() {}

export const demos = [{ name: 'Basic', path: 'basic', component: Basic }];

// let start = Date.now();
// for (let index = 0; index < 10000; index++) {
//     new java.lang.Float(2.3);
// }
// console.log('java.lang.Float', Date.now() -start);
// start = Date.now();
// for (let index = 0; index < 10000; index++) {
//      java.lang.Float.valueOf(2.3);
// }
// console.log('java.lang.Float.valueOf', Date.now() -start);
// start = Date.now();
// for (let index = 0; index < 10000; index++) {
//     float(2.3);
// }
// console.log('float', Date.now() -start);