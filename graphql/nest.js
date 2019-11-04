const zones = require('../data/zones')
const bosses = require('../data/bosses')
const loots = require('../data/loots')
const classes = require('../data/classes')
const chars = require('../data/chars')

bosses.forEach(boss=>{
  boss.zone = zones.find(z=>z.name===boss.zone)
  boss.zone.bosses.push(boss)
})

chars.forEach(char=>{
  char.class = classes.find(c => c.name === char.class)
  char.class.chars.push(char)

  char.gotIt.forEach(got => {
    got = loots.find(l => l.name === got)
    got.gotIt.push(char)
  })
  char.assign.forEach(assi => {
    got = loots.find(l => l.name === assi)
    got.assign.push(char)
  })
})


loots.forEach(loot=>{
  //Manage zones
  loot.zone = zones.find(z=>z.name === loot.zone)
  loot.zone.loots.push(loot)
  
  //Manage bosses
  loot.from = loot.from.map(b => bosses.find(zb => zb.name === b))
  loot.from.forEach(boss=>boss.loots.push(loot))
  
  //Manage roles
  loot.classes = loot.classes.map(c => classes.find(zc => zc.name === c))
  loot.classes.forEach(c=>c.loots.push(loot))
})


module.exports = {
  zones,
  bosses,
  loots,
  classes,
  chars
}