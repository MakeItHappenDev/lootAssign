module.exports = `
type Loot {
  name:ID!
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
  name:ID!
  zone:Zone!
  loots:[Loot!]!
}

type Zone {
  name:ID!
  loots:[Loot!]! 
  bosses:[Boss!]!
}

type Class {
  name:ID!
  chars:[Char!]!
  loots:[Loot!]!
}

type Char {
  name:ID!
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