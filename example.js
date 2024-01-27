const championsArray = [
  { name: "Yasuo", age: 33 },
  { name: "Aatrox", age: 97 },
  { name: "Draven", age: 23 },
  { name: "Darius", age: 47 },
  { name: "Veigar", age: 69 },
  { name: "Jinx", age: 18 },
  { name: "Yone", age: 38 },
]

const newArray = championsArray.filter(champion => {
  if (champion.age > 23) return champion
})

console.log("RESULT", newArray)