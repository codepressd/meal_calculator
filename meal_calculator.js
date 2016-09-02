/*Diner Construtor*/

var Diner = function(name) {

    this.name = name;
    this.food = {};
    this.total = null;
    this.tax = null;
    this.tip = null;


};

Diner.prototype.addDish = function(food) {

    this.food = food;


}

Diner.prototype.calcTotal = function() {


    for (prop in this.food) {
        this.total += this.food[prop]; //console.log(this.food[prop]);

    }

}

Diner.prototype.calcTax = function() {

    var taxes = (this.total * 1.07725) - this.total;
    this.tax = Math.round(taxes * 100) / 100;


}
Diner.prototype.calcTip = function() {

        var taxTotal = this.total + this.tax;
        var taxTipTotal = (taxTotal * 1.2) - taxTotal;
        this.tip = Math.round(taxTipTotal * 100) / 100;

    }
    /*Food bill Object*/

var myDiners = [];

var foodBill = {

    foodTotal: null,

    taxTotal: null,

    tipTotal: null,

    completeTotal: null,

    totalAll: function() {

        for (prop in myDiners) {
            let thisDiner = myDiners[prop];
            this.foodTotal += thisDiner.total;
            this.taxTotal += thisDiner.tax;
            this.tipTotal += thisDiner.tip;
            this.completeTotal += (thisDiner.tip + thisDiner.tax + thisDiner.total);

        }

    },

    printEverything: function() {

        console.log('Total Food Bill = $' + this.foodTotal);
        console.log('Total Tips Owed = $' + this.tipTotal);
        console.log('Total Tax Owed = $' + this.taxTotal);

        for (prop in myDiners) {
            let thisDiner = myDiners[prop];
            console.log('Diner:' + thisDiner.name + ', Food Total = $' + thisDiner.total + ', Tax Total = $' + thisDiner.tax + ', TipTotal = $' + thisDiner.tip);

        }

    }

}


/*Dummy data*/

var dummyData = {

    diner1: {
        name: 'Joe',
        food: {
            burger: 10,
            salad: 5
        }

    },
    diner2: {
        name: 'Jane',
        food: {
            fries: 8,
            chicken: 12
        }

    },
    diner3: {
        name: 'Jack',
        food: {
            escargot: 13,
            brussels: 9

        }
    }
}

/*Runs the program*/

function runRestaurant() {

    for (prop in dummyData) {
        var newDiner = new Diner(dummyData[prop].name);
        newDiner.addDish(dummyData[prop].food);
        newDiner.calcTotal();
        newDiner.calcTax();
        newDiner.calcTip();
        myDiners.push(newDiner);

    }
    foodBill.totalAll();
    foodBill.printEverything();
}
