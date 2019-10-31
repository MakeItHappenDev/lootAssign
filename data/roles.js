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
    chars:[],
    loots:[]
  },
  {
    id:"Healer",
    name:"Healers (Priest/Druid/Shaman/Paladin)",
    chars:[],
    loots:[]
  },
  {
    id:"Melee",
    name:"Physical (warrior/rogues/hunter/enh)",
    chars:[],
    loots:[]
  },
  {
    id:"Tank",
    name:"Tanks",
    chars:[],
    loots:[]
  },
]