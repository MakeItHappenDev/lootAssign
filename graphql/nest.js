const zones = require('../data/zones')
const bosses = require('../data/bosses')
const loots = require('../data/loots')
const roles = require('../data/roles')

zones.forEach(zone=>{
  zone.bosses = zone.bosses.map(b => bosses.find(zb => zb.id === b))
  zone.loots = zone.loots.map(l => loots.find(zl => l === zl.id))
})

bosses.forEach(boss=>{
  boss.zone = zones.find(z=>z.id===boss.zone)
  boss.loots = boss.loots.map(l => loots.find(bl => l === bl.id))
})

loots.forEach(loot=>{
  loot.zone = zones.find(z=>z.id===loot.zone)
  loot.from = loot.from.map(b => bosses.find(zb => zb.id === b))
  loot.role = loot.role.map(r => roles.find(zr => zr.id === r))
})



module.exports = {
  zones,
  bosses,
  loots
}