const zones = require('../data/zones')
const bosses = require('../data/bosses')
const loots = require('../data/loots')
const roles = require('../data/roles')

zones.forEach(zone=>{
  //zone.bosses = zone.bosses.map(b => bosses.find(zb => zb.id === b))
  //zone.loots = zone.loots.map(l => loots.find(zl => l === zl.id))
})

bosses.forEach(boss=>{
  boss.zone = zones.find(z=>z.id===boss.zone)
  boss.zone.bosses.push(boss)
  //boss.loots = boss.loots.map(l => loots.find(bl => l === bl.id))
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

})


module.exports = {
  zones,
  bosses,
  loots
}