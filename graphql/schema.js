module.exports = `
type Loot {
  id:ID!
  name:String!
  zone:Zone!
  from:[Boss!]!
  classes:[Class!]!
  gotIt:[Char!]!
  assign:[Char!]!
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

type Class {
  id:ID!
  chars:[Char!]!
  loots:[Loot!]!
}

type Char {
  id:ID!
  name:String!
  class:Class! 
  gotIt:[Loot!]!
  assign:[Loot!]!
}

type Query {
    bosses:[Boss!]!
    zones:[Zone!]!
    loots:[Loot!]!
    classes:[Class!]!
}
`