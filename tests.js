let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
    //console.log(`Wagon Should Quarantine?: ${ wagon.shouldQuarantine() } – EXPECTED: false. Everyone is healthy!`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${ wagon.shouldQuarantine() } – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${ wagon.totalFood() } – EXPECTED: 3.`)
wagonDiv.append(lnBrk, "You have a wagon with a capacity of " + wagon.capacity)
//document.write("You have a wagon with a capacity of " + wagon.capacity + '<br>')
document.write("Your wagon's passenger list is: ")
for (let i = 0; i < wagon.passengers.length; i++) {
    document.write(wagon.passengers[i].name +' ')
}
// https://www.w3schools.com/howto/howto_js_animate.asp