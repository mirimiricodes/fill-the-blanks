import * as chai from "chai"
import { TextLoader } from "../src/TextLoader.js"
let expect = chai.expect

describe("TextLoader", () => {
    it("should get content from .txt", () => {
        createTxtWithContent("src/test.txt", "Hello, world from txt")
        let textLoader = new TextLoader()
        textLoader.load("src/test.txt")
        let text = textLoader.getText()
        expect(text).to.be.equal("Hello, world from txt")
        deleteTxt("src/test.txt")
    })
})

import fs from 'fs'
function createTxtWithContent(filename, content) {
    fs.writeFileSync(filename, content)
}

function deleteTxt(filename) {
    fs.rmSync(filename)
}
