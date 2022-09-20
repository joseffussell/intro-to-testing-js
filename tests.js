// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function(){

    it('should be defined as a function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!" when executed', function () {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe('Hello, Alex!');
    });
    it('should return "Hello, Pat!"', function () {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
});


describe('isFive', function (){

    it('should be defined as a function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return "true"', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return "false"', function () {
        expect(isFive(0)).toBe(false);
    });
    it('should return "true"', function () {
        expect(isFive('5')).toBe(true)
    });
});

describe('isEven', function (){

    it('should be defined as a function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return "true"', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return "false"', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return "false"', function () {
        expect(isEven(false)).toBe(false);
    });

});