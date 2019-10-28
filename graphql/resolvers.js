import data from './nest'

const root = { 
  hello: () => "Hello Boys",
  zones: () => data.zones,
  bosses: () => data.bosses
};

module.exports = root