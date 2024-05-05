export class Metatext {
    textAsArray = [];
    setText(text) {
        this.textAsArray = text.split(" ");
    }

    getNumWords() {
        return this.textAsArray.length;
    }

    checkWord(id, word) {
        let wordAtId = this.textAsArray.at(id - 1)
        if (wordAtId == word) {
            return true
        }
        else {
            return false
        }
    }
}
