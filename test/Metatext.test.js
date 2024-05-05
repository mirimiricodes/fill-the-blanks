import * as chai from "chai"
import { Metatext } from "../src/Metatext.js"
let expect = chai.expect

describe("Metatext", () => {
    it("should set text", () => {
        let metatext = new Metatext()
        expect(() => metatext.setText("Hello, world")).to.not.throw()
    })

    it("should return number of words", () => {
        let metatext = new Metatext()
        metatext.setText("Hello, world")
        expect(metatext.getNumWords()).to.be.equal(2)
    })

    it("should return number of words again", () => {
        let metatext = new Metatext()
        metatext.setText("Hello, beautiful world")
        expect(metatext.getNumWords()).to.be.equal(3)
    })

    it("should return true when guessing a word", () => {
        let metatext = new Metatext()
        metatext.setText("Hello, world")
        expect(metatext.checkWord(2, "world")).to.be.equal(true)
    })

    it("should return false when guessing a wrong word", () => {
        let metatext = new Metatext()
        metatext.setText("Hello, world")
        expect(metatext.checkWord(2, "beautiful")).to.be.equal(false)
    })

    it("should return true when guessing another word", () => {
        let metatext = new Metatext()
        metatext.setText("Hello, world")
        expect(metatext.checkWord(1, "hello")).to.be.equal(true)
    })

})


