class Sandwich {
    constructor(protein, bread, vegetable) {
        this.protein = protein;
        this.bread = bread;
        this.vegetable = vegetable;
        this.calories = 400;
        this.sizeBread = 100;
    };

    sumCalories() {
        if(this.bread === 'blanco') {
            this.calories = 1000;

        } else {
            this.calories = 400;
        }
    }

    eat() {
        this.sizeBread -= 25;
    }
};

class Special extends Sandwich {
    constructor(premiumIngredient, protein, bread, vegetable) {
        super(protein, bread, vegetable);
        this.premiumIngredient = premiumIngredient;
    }

    eatSpecial() {
        this.eat();
        this.eat();
    }


}

// const sandwichPepperoni = new Sandwich('pepperoni', 'integral', 'lechuga');
// console.log("🚀 ~ file: classes.js ~ line 19 ~ sandwichPepperoni", sandwichPepperoni)
// sandwichPepperoni.bread = 'blanco';
// sandwichPepperoni.sumCalories();
// console.log("🚀 ~ file: classes.js ~ line 19 ~ sandwichPepperoni", sandwichPepperoni)
// sandwichPepperoni.eat();
// console.log("🚀 ~ file: classes.js ~ line 19 ~ sandwichPepperoni", sandwichPepperoni)
const fancySandwich = new Special('jamón serrano', 'queso', 'blanco', 'rucula');
console.log("🚀 ~ file: classes.js ~ line 39 ~ fancySandwich", fancySandwich)
fancySandwich.eat();
console.log("🚀 ~ file: classes.js ~ line 39 ~ fancySandwich", fancySandwich)
fancySandwich.eatSpecial();
console.log("🚀 ~ file: classes.js ~ line 39 ~ fancySandwich", fancySandwich)
