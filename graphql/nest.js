const zones = require('../data/zones')
const bosses = require('../data/bosses')
const loots = require('../data/loots')
const roles = require('../data/roles')

bosses.forEach(boss=>{
  boss.zone = zones.find(z=>z.id===boss.zone)
  boss.zone.bosses.push(boss)
})

loots.forEach(loot=>{
  //Manage zones
  loot.zone = zones.find(z=>z.id===loot.zone)
  loot.zone.loots.push(loot)
  
  //Mange bosses
  loot.from = loot.from.map(b => bosses.find(zb => zb.id === b))
  loot.from.forEach(boss=>boss.loots.push(loot))
  
  //Manage roles
  loot.roles = loot.roles.map(r => roles.find(zr => zr.id === r))
  loot.roles.forEach(role=>role.loots.push(loot))
})


module.exports = {
  zones,
  bosses,
  loots,
  roles
}