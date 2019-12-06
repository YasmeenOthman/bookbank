import dummy from './dummy.json';

export function getAll(){
  return Promise.resolve(dummy)
}

export default {
  getAll
}