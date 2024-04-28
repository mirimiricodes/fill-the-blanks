import * as chai from "chai"
import { TextLoader } from "../src/TextLoader.js"
let expect = chai.expect

describe("TextLoader", () => {
    it("should get text", () => {
        let textLoader = new TextLoader()
        let text = textLoader.getText()
        expect(text).to.be.a("string")
    })
})



