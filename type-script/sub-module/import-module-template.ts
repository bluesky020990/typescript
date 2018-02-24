import {numberUtilsModule} from './export-module-template';

console.log(numberUtilsModule);

/*
from source: https://stackoverflow.com/questions/30712638/typescript-export-imported-interface

There is an export import syntax for legacy modules, and a standard export format for modern ES6 modules:

// export the default export of a legacy (`export =`) module
export import MessageBase = require('./message-base');

// export the default export of a modern (`export default`) module
export { default as MessageBase } from './message-base';

// export an interface from a legacy module
import Types = require('./message-types');
export type IMessage = Types.IMessage;

// export an interface from a modern module
export { IMessage } from './message-types';






import 'jquery';                        // import a module without any import bindings
import $ from 'jquery';                 // import the default export of a module
import { $ } from 'jquery';             // import a named export of a module
import { $ as jQuery } from 'jquery';   // import a named export to a different name
import * as crypto from 'crypto';       // import an entire module instance object

export var x = 42;                      // export a named variable
export function foo() {};               // export a named function

export default 42;                      // export the default export
export default function foo() {};       // export the default export as a function

export { encrypt };                     // export an existing variable
export { decrypt as dec };              // export a variable as a new name
export { encrypt as en } from 'crypto'; // export an export from another module
export * from 'crypto';                 // export all exports from another module
                                        // (except the default export)
* */