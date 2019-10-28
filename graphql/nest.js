const zones = require('../data/zones')
const bosses = require('../data/bosses')
const roles = require('../data/roles')

zones.forEach(zone=>{
  zone.bosses = zone.bosses.map(b => bosses.find(zb => zb.id === b))
})

bosses.forEach(boss=>{
  boss.zone = zones.find(z=>z.id===boss.zone)
})

module.exports = {
  zones,
  bosses
}