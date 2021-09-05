class GuessingGame {
    
    constructor() {
        this.sugestion;
        this.min;
        this.max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.sugestion = this.min + Math.round((this.max-this.min)/2);
        return this.sugestion;
    }

    lower() {
        this.max = this.sugestion;
    }

    greater() {
        this.min = this.sugestion;
    }
}

module.exports = GuessingGame;
