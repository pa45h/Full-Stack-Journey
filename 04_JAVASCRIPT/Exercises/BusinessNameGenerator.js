// use 5-5 words of adjectives, business topics and other
//  and generate random business names

let adjectives = {
    1:"Stellar",
    2:"Rapid",
    3:"Quantum",
    4:"Agile",
    5:"Bright"
}
let topics = {
    1:"Tech",
    2:"Finance",
    3:"Health",
    4:"Media",
    5:"Energy"
}
let others = {
    1:"Solutions",
    2:"Hub",
    3:"Works",
    4:"Labs",
    5:"Nexus"
}

console.log(`${adjectives[Math.round(Math.random()*4 + 1)]} ${topics[Math.round(Math.random()*4 + 1)]} ${others[Math.round(Math.random()*4 + 1)]}`);


