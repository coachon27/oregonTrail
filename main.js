class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food += 2;
    console.log(this.name + " has a food total of: " + this.food);
  }
  eat() {
    if (this.food === 0) {
      console.log(this.name + ", can't eat anymore. You have no food!");
      this.isHealthy = false;
    } else {
      this.food -= 1;
    }
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }
  getAvailableSeatCount() {
    //let seatsAvailable = (this.capacity - this.passengers.length)
    return this.capacity - this.passengers.length; //seatsAvailable ;
  }
  join(traveler) {
    if (this.getAvailableSeatCount() > 0) {
      this.passengers.push(traveler);
    }
  }
  shouldQuarantine() {
    for (let i = 0; i < this.passengers.length; i++)
      if (this.passengers[i].isHealthy === false) {
        return true;
      }
    return false;
  }
  totalFood() {
    let wagonFoodTotal = 0;
    for (let i = 0; i < this.passengers.length; i++) {
      wagonFoodTotal += this.passengers[i].food;
    }
    return wagonFoodTotal;
  }
}
let lnBrk = document.createElement("br");
let wagonDiv = document.createElement("div");
wagonDiv.append("Wagons", lnBrk);
document.body.appendChild(wagonDiv);
let wagonButton = document.createElement("button");
wagonButton.append("click here to add a WAGON");
wagonDiv.appendChild(wagonButton, lnBrk);
wagonButton.addEventListener("click", function () {
  //main.remove()
});
//  for (let i = 0; i < ; i++) {
let quarButton = document.createElement("button");

let travelerDiv = document.createElement("div");
travelerDiv.append("Travelers");
document.body.appendChild(travelerDiv);
let eatButton = document.createElement("button");
eatButton.append("click here to EAT");
travelerDiv.appendChild(eatButton);
let huntButton = document.createElement("button");
huntButton.append("click here to HUNT");
travelerDiv.appendChild(huntButton);
let travelerButton = document.createElement("button");
travelerButton.append("click here to add traveler");
travelerDiv.appendChild(travelerButton);
let trvlrInput = document.createElement("input");
trvlrInput.setAttribute("type", "text");
travelerDiv.appendChild(trvlrInput);

// image.src = ""
