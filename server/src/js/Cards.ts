import axios from "axios";
const URL = "http://localhost/api/";

class Card {
    private cardValue: number;

    constructor(cardValue: number) {
        this.cardValue = cardValue;
    }

    setValue(newValue: number) {
        this.cardValue = newValue;
    }

    getValue() {
        return this.cardValue;
    }
}
class Cards {
    private cards: Card[];
    constructor() {
        this.cards = [];
    }
    public async fetchCards(): Promise<void> {
        let responses: any[] = [];
        await axios.get(URL + "cards")
            .then((response) => {
                responses = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        for (let i = 0; i < responses.length; i++) {
            this.cards.push(new Card(responses[i].cardValue));
        }
    }
    public addCard(card: Card): void {
        this.cards.push(card);
    }
    public isNext(): boolean {
        return this.cards.length != 0;
    }
    getCardAt(i: number): Card | undefined {
        return this.cards[i];
    }
    getLength(): number {
        return this.cards.length;
    }
    getCards(): Card[] {
        return this.cards;
    }
}
export { Card, Cards };
