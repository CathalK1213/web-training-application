export const Questions = [

    {

        title: "Whats The Output",
        prompt: "function sayHi() {\n" +
            "  console.log(name);\n" +
            "  console.log(age);\n" +
            "  var name = 'Lydia';\n" +
            "  let age = 21;\n" +
            "}\n" +
            "\n" +
            "sayHi();",

        optionA: "A: Lydia and undefined",
        optionB: "B: Lydia and ReferenceError",
        optionC: "C: ReferenceError and 21",
        optionD: "D: undefined and ReferenceError",

        answer: "D",


    },
    {
        title: "Whats The Output",
        prompt: "for (var i = 0; i < 3; i++) {\n" +
            "  setTimeout(() => console.log(i), 1);\n" +
            "}\n" +
            "\n" +
            "for (let i = 0; i < 3; i++) {\n" +
            "  setTimeout(() => console.log(i), 1);\n" +
            "}",

        optionA: "A: 0 1 2 and 0 1 2",
        optionB: "B: 0 1 2 and 3 3 3",
        optionC: "C: 3 3 3 and 0 1 2",
        optionD: "D: Type Error",


        answer: "C",
    },


    {
        title: "Whats The Output",
        prompt: "const shape = {\n" +
            "  radius: 10,\n" +
            "  diameter() {\n" +
            "    return this.radius * 2;\n" +
            "  },\n" +
            "  perimeter: () => 2 * Math.PI * this.radius,\n" +
            "};\n" +
            "\n" +
            "console.log(shape.diameter());\n" +
            "console.log(shape.perimeter());",

        optionA: "A: 20 and 62.83185307179586",
        optionB: "B: 20 and NaN",
        optionC: "C: 20 and 63",
        optionD: "D: NaN and 63",

        answer: "B",
    },

    {
        title: "Whats The Output",
        prompt: "let c = { greeting: 'Hey!' };\n" +
            "let d;\n" +
            "\n" +
            "d = c;\n" +
            "c.greeting = 'Hello';\n" +
            "console.log(d.greeting);",

        optionA: "A: Hello",
        optionB: "B: Hey!",
        optionC: "C: Undefined",
        optionD: "D: Type Error",

        answer: "A",
    },

    {

        title: "Whats The Output",
        prompt: "let a = 3;\n" +
            "let b = new Number(3);\n" +
            "let c = 3;\n" +
            "\n" +
            "console.log(a == b);\n" +
            "console.log(a === b);\n" +
            "console.log(b === c);",

        optionA: "A: true false true",
        optionB: "B: false false true",
        optionC: "C: true false false",
        optionD: "D: false true true",

        answer: "C",
    },

    {

        title: "Whats wrong with this",
        prompt: "function bark() {\n" +
            "  console.log('Woof!');\n" +
            "}\n" +
            "\n" +
            "bark.animal = 'dog';",

        optionA: "A: Nothing, this is totally fine",
        optionB: "B: Syntax error",
        optionC: "C: 'Woof' gets logged",
        optionD: "D: Reference Error",

        answer: "A",
    },

    {
        title: "Whats The Output",
        prompt: "function sum(a, b) {\n" +
            "  return a + b;\n" +
            "}\n" +
            "\n" +
            "sum(1, '2');",

        optionA: "A: NaN",
        optionB: "B: Type Error",
        optionC: "C: '12'",
        optionD: "D: 3",

        answer: "C",
    },

    {
        title: "Whats The Output",
        prompt: "function* generator(i) {\n" +
            "  yield i;\n" +
            "  yield i * 2;\n" +
            "}\n" +
            "\n" +
            "const gen = generator(10);\n" +
            "\n" +
            "console.log(gen.next().value);\n" +
            "console.log(gen.next().value);",

        optionA: "A: [0, 10], [10, 20]",
        optionB: "B: 20, 20",
        optionC: "C: 10, 20",
        optionD: "D: 0, 10 and 10, 20",

        answer: "C",
    },

    {
        title: "Whats The Output",
        prompt: "let number = 0;\n" +
            "console.log(number++);\n" +
            "console.log(++number);\n" +
            "console.log(number);",

        optionA: "A: 1 1 2",
        optionB: "B: 1 2 2",
        optionC: "C: 0 2 2",
        optionD: "D: 0 1 2",

        answer: "C",
    },

    {
        title: "Whats The Output",
        prompt: "function getAge() {\n" +
            "  'use strict';\n" +
            "  age = 21;\n" +
            "  console.log(age);\n" +
            "}\n" +
            "\n" +
            "getAge();",

        optionA: "A: 21",
        optionB: "B: Type Error",
        optionC: "C: ReferenceError",
        optionD: "D: undefined",

        answer: "C",
    },
];





