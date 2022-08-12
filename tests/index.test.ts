import FireLeaf from '../src/index';

const fireLeaf = FireLeaf({ context: 1 });
const ds = fireLeaf.createDataSource({});

console.log( ds );