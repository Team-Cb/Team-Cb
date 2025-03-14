"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(cardValue) {
        this.cardValue = cardValue;
    }
    setValue(newValue) {
        this.cardValue = newValue;
    }
    getValue() {
        return this.cardValue;
    }
}
exports.Card = Card;
