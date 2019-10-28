/*
type Zone {
  id:ID!
  name:String!
  loots:[Loot!]!
  bosses:[Boss!]!
}
*/

module.exports = [
  {
    id:"MoltenCore",
    name:"Molten Core",
    loots:["ArcanistCrown", "FelheartHorns", "CircletProphecy", "NightslayerCover", "CenarionHelm", "EarthfuryHelmet", "GiantstalkerHelmet", "LawbringerHelm", "HelmMight", "DrillborerDisk", "BrutalityBlade", "AurastoneHammer", "GutgoreRipper", "FlameguardGauntlets", "FireRunedGrimoire", "ManaIgnitingCord", "SabatonsFlamewalker", "FlamewakerLegplates", "DeepEarthSpaulders", "MagmaTemperedBoots", "AgedCoreLeatherGloves", "QuickStrikeRing", "TalismanEphemeralPower", "ObsidianEdgedBlade", "BindingsWindseeker", "TalismanBindingShard"],
    bosses:["Lucifron","Gehennas","Shazzrah","Sulfuron","Magmadar","Garr","Geddon","Golemagg","Executus","Ragnaros","TrashMC"]
  },
  {
    id:"Onyxia",
    name:"Onyxia",
    loots:[],
    bosses:["Onyxia"],
  }
]