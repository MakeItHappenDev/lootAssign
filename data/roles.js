/*
type Role {
  id:ID!
  name:String
  loots:[Loot!]!
}
*/

module.exports = [
  {
    id:"Caster",
    name:"casters (mage/warlock/elem)",
    loots:[]
  },
  {
    id:"Healer",
    name:"Healers (Priest/Druid/Shaman/Paladin)",
    loots:[]
  },
  {
    id:"Melee",
    name:"Physical (warrior/rogues/hunter/enh)",
    loots:[]
  },
  {
    id:"Tank",
    name:"Tanks",
    loots:[]
  },
]