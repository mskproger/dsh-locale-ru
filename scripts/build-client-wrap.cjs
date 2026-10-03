// Обёртка сырого client-бандла в window.__ModuleLoader__.load(...).
// Использование: node build-client-wrap.js
'use strict';
const fs = require('fs');

const PACKAGE_ID = '@mskproger/dsh-locale-ru';
const raw = fs.readFileSync('lib/client.raw.js', 'utf8');
const lines = raw.trimEnd().split('\n');
if (lines[0]?.trim() === '"use strict";') lines.shift();
const body = lines
  .map((line) => (line.length === 0 ? '' : `    ${line}`))
  .join('\n');
const output = `window.__ModuleLoader__.load({
  id: ${JSON.stringify(PACKAGE_ID)},
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
${body}
    return module.exports;
  },
});
`;
fs.writeFileSync('lib/client.js', output, 'utf8');
console.log('wrapped lib/client.js, bytes:', Buffer.byteLength(output));
