module.exports = `
type Loot {
  id:ID!
  name:String!
  zone:Zone!
  from:[Boss!]!
  roles:[Role!]!
  gotIt:[Char!]!
  assign:[Assign!]!
  iLvl:Int
  quality:Quality
}

enum Quality{
  Common
  Uncommon
  Rare
  Epic
  Legendary
}

type Boss {
  id:ID!
  zone:Zone!
  loots:[Loot!]!
  name:String!
}

type Zone {
  id:ID!
  name:String!
  loots:[Loot!]! 
  bosses:[Boss!]!
}

type Role {
  id:ID!
  name:String
  loots:[Loot!]!
}

type Char {
  id:ID!
  name:String!
  role:[Role!]!
  class:Class! 
  gotIt:[Loot!]!
}

enum Class {
  Mage
  Warlock
  Warrior
  Rogue
  Hunter
  Druid
  Priest
  Paladin
  Shaman
}

type Assign {
  id:ID! 
  item:Loot!
  char:Char!
}

type Query {
    bosses:[Boss!]!
    zones:[Zone!]!
    loots:[Loot!]!
}
`