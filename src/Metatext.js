export class Metatext {
    text;
    setText(text) {
        this.text = text.split(" ");
    }

    getNumWords() {
        return this.text.length;
    }
}
