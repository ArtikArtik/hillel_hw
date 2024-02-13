// Завдання 1

var myAppsUsers = {
  Name: 'Davon',
  Age: 31,
  Gender: 'male',
  City: 'Los-Angeles',
  Language: 'Spanish',
  Car: 'Toyota',
  Model: 'Camry',

  getInfo: function() {
    return `Name: ${this.Name}, Age: ${this.Age}, Gender: ${this.Gender}, City: ${this.City}, Language: ${this.Language}, Car: ${this.Car}, Model: ${this.Model}`;
  },

  Nation: 'Italian',

  getNationInfo: function() {
    return `Nation: ${this.Nation};`
  }
};

console.log(myAppsUsers.getInfo());
console.log(myAppsUsers.getNationInfo());

  // Завдання 2 

  var services = {
    'Стрижка': 60,
    'Гоління': 80,
    'Миття голови': 100
  };

  services['Розбите скло'] = 200;
  // services['Побиття бармена'] = 600; опціонально

  services.price = function() {
    var total = 0;
    for (var service in this) {
      if (typeof this[service] === 'number') {
        total +=this[service];
      }
    }
    return total;
  };


  services.minPrice = function() {
    var min = Infinity;
    for (var service in this) {
      if (typeof this[service] === 'number' && this[service] < min) {
        min = this[service];
      }
    }
    return min;
  };


  services.maxPrice = function() {
    var max = -Infinity;
    for (var service in this) {
      if (typeof this[service] === 'number' && this[service] > max) {
        max = this[service];
      }
    }
    return max;
  };

console.log("Загальна вартість послуг: " + services.price() + " грн");
console.log("Мінімальна вартість: " + services.minPrice() + " грн");
console.log("Максимальна вартість: " + services.maxPrice() + " грн");