import data from './nest'

const root = { 
  hello: () => "Hello Boys",
  zones: () => data.zones,
  bosses: () => data.bosses,
  loots: () => data.loots,
  classes: () => data.classes
};

module.exports = root