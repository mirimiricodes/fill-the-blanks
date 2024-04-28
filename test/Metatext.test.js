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
        expect(true).to.be.equal(false)

    })

    it("should return false when guessing a wrong word", () => {


    })
})


