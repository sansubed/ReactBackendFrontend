const firstAge = 35
const secondAge = 25

// Global Scope
export let printAge

// Block Scope
if (firstAge < 30) {
  printAge = firstAge
} else if (secondAge < 30) {
  printAge = secondAge
}

// Hosting
// export var printAge
