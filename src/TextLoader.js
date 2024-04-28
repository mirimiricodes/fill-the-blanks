import fs from 'fs'
export class TextLoader {
    text
    load(filename) {
        this.text = fs.readFileSync(filename)
            .toString()
    }

    getText() {
        return this.text
    }

}
