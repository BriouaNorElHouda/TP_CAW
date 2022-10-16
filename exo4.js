const fs = require('fs');

fs.writeFile('test.txt', content, { flag: 'a+' }, err => {});

;