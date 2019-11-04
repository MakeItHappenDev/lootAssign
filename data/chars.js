//fetch from DB
/*
type Char {
  id:ID!
  name:String!
  roles:[Role!]!
  class:Class! 
  gotIt:[Loot!]!
  assign:[Loot!]!
}
*/


module.exports = [
  {
    id:"Pleingaz",
    name:"Pleingaz",
    roles:["Caster"],
    class:"Mage",
    gotIt:[],
    assign:["Arcanist Crown"]
  },
  {
    id:"Magebane",
    name:"Magebane",
    roles:["Caster"],
    class:"Mage",
    gotIt:["Arcanist Crown"],
    assign:[]
  },
  {
    id:"Varbane",
    name:"Varbane",
    roles:["Caster"],
    class:"Warlock",
    gotIt:[],
    assign:[]
  }
]