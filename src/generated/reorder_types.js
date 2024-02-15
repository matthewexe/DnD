const fs = require('fs');

const schemaPath = '../types/schema.graphql';
const copyPath = './graphql copy.ts';

// Read the schema file
const schema = fs.readFileSync(schemaPath, 'utf-8');

const copyMapTypeNames = {};

const getTypeName = str => {
  const splitted = str.split(' ', 3)[2];
  return splitted.replace(/\W/g, '');
};

const readedCopy = fs.readFileSync(copyPath, 'utf-8');

const replacedCopy = readedCopy.replace(/export/g, '###---###export');
const splittedCopy = replacedCopy.split('###---###');
// Read the copy file
const copy = splittedCopy.slice(1, splittedCopy.length);

copy.forEach(item => {
  const name = getTypeName(item);
  copyMapTypeNames[name] = item;
  // console.log(name);
});

console.log(copyMapTypeNames);

const Type = Object.freeze({
  TYPE: 'type',
  ENUM: 'enum',
  INTERFACE: 'interface',
});

// console.log(schema);

// Extract the type names from the schema
const schemaTypes = schema
  .match(/type\s+(\w+)|enum\s+(\w+)|interface\s+(\w+)|union\s+(\w+)/g)
  .map(match => {
    const splitted = match.split(' ', 2);
    // console.log(match);
    const type = splitted[0];
    const name = splitted[1];

    let typeObj;

    if (type === Type.TYPE) {
      typeObj = Type.TYPE;
    } else if (type === Type.ENUM) {
      typeObj = Type.ENUM;
    } else if (type === Type.INTERFACE) {
      typeObj = Type.INTERFACE;
    }

    return {
      type: typeObj,
      name: name,
    };
  });

console.log(schemaTypes);

// Reorder the copy file based on the type names
let reorderedCopy = schemaTypes.reduce((acc, type) => {
  const nextType = copyMapTypeNames[type.name];
  if (nextType) {
    return acc + nextType;
  }
  return acc;
}, '');

console.log(reorderedCopy);

// Write the reordered copy file
fs.writeFileSync('ordered_gen.ts', reorderedCopy, 'utf-8');

// console.log('Reordering complete!');
