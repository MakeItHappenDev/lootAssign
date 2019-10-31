const zones = require('../data/zones')
const bosses = require('../data/bosses')
const loots = require('../data/loots')
const roles = require('../data/roles')
const chars = require('../data/chars')
const gotit = require('../data/gotit')
const assign = require('../data/assign')

bosses.forEach(boss=>{
  boss.zone = zones.find(z=>z.id===boss.zone)
  boss.zone.bosses.push(boss)
})

chars.forEach(char=>{
  char.roles = char.roles.map(r => roles.find(rf => rf.id === r))
  char.roles.forEach(role => {
    role.chars.push(char)
  })
})

gotit.forEach(got => {
  const loot = loots.find(l => l.id === got.loot)
  const char = chars.find(c => c.id === got.char)
  loot.gotIt.push(char)
  char.gotIt.push(loot)
})

assign.forEach(assi => {
  const loot = loots.find(l => l.id === assi.loot)
  const char = chars.find(c => c.id === assi.char)
  loot.assign.push(char)
  char.assign.push(loot)
})

loots.forEach(loot=>{
  //Manage zones
  loot.zone = zones.find(z=>z.id===loot.zone)
  loot.zone.loots.push(loot)
  
  //Manage bosses
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
  roles,
  chars
}