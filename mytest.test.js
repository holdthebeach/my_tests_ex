const myFunctions = require("./myFunctions");

//Unit Tests
describe("empty test", () => {
    it("tests that the framework is running", () => {
        expect("abc").toEqual("abc");
    });

    it("fails when it should", () => {
        expect("abc").not.toEqual("def");
    })
})

describe("testing greedyGame", () => {
    it("works ok when sum is under 100", () => {
        expect(myFunctions.greedyGame(20,30)).toEqual(50);
    })

    it("returns zero (not the sum) with two slices whose sum are over 100", () => {
        expect(myFunctions.greedyGame(70, 50)).toEqual(0);
        expect(myFunctions.greedyGame(80, 30)).not.toEqual(110);
    })

})

describe("testing string shortening", () => {
    it("returns correct shortened string", () => {
        expect(myFunctions.shortenString("teacakes")).toEqual("teacakes");
        expect(myFunctions.shortenString("abcdefghij")).toEqual("abcdefghij");
        expect(myFunctions.shortenString("once upon a time")).toEqual("once up...");
    })

    it("does not return the given string if longer than ten characters", () => {
        expect(myFunctions.shortenString("once upon a time")).not.toEqual("once upon a time");
    })
})

describe("testing file size format returned", () => {
    it("returns Bytes format", () => {
        expect(myFunctions.formatFileSize(200)).toEqual("200 Bytes");
    });

    it("returns KB format", () => {
        expect(myFunctions.formatFileSize(2000)).toEqual("1.95 KB");
    })
})

//Integration Tests

describe("tests for API call", () => {
    //reset mocks if you'll want to test other states
    jest.spyOn(myFunctions.APICall, "callAPI")
    .mockReturnValue(["myfirstcustomer", "mysecondcustomer"])

    it("mocks the API", () => {
        expect(myFunctions.getFirstClient())
        .toEqual("myfirstcustomer")
    })
})