const {toUpperCase} = require('../src/toUpperCase')
describe("Stor bokstav test", ()=>{

    test("omvandla 'hej' till 'HEJ'",()=>{
        //Test Comes here
        const input = "hej";
        const expectedOutPut = "HEJ";

        expect(toUpperCase(input)).toBe(expectedOutPut);
    });
      

});

