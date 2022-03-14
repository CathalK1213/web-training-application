/**
 *
 * This data js file is for enabling me to pass in different values to update the design of the application
 * without having to hard code in the properties in addition to making it reusable (Using the images)
 *
 */

export const homeObjectOne = {
    id: "about",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Premium Coding",
    headLine: "Easy coding, for all levels",
    description: "Take our training courses with our application and receive a certificate of completion. Its for developers of all skill ranges. ",
    buttonLabel: "Get Started",
    imgStart: false,
    img: require("../../images/svg-1.svg").default,
    alt: 'productivity',
    dark: true,
    primary: true,
    darkText: false,


};


export const homeObjectTwo = {
    id: "training",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Get Started Training",
    headLine: "Easy-Hard coding training, for everyone!",
    description: "Take our training courses with our application and receive a certificate of completion. Its for developers of all skill ranges. ",
    buttonLabel: "Learn More",
    imgStart: true,
    img: require("../../images/svg-2.svg").default,
    alt: 'progress',
    dark: false,
    primary: false,
    darkText: true,


};


export const homeObjectThree = {
    id: "account",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "View Account",
    headLine: "Easy coding, for all levels",
    description: "Take our training courses with our application and receive a certificate of completion. Its for developers of all skill ranges. ",
    buttonLabel: "Get Started",
    imgStart: false,
    img: require("../../images/svg-3.svg").default,
    alt: 'login',
    dark: true,
    primary: true,
    darkText: false,


};

export const homeObjectFour = {
    id: "signup",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "View Account",
    headLine: "Easy coding, for all levels",
    description: "Take our training courses with our application and receive a certificate of completion. Its for developers of all skill ranges. ",
    buttonLabel: "Start Now",
    imgStart: false,
    img: require("../../images/svg-4.svg").default,
    alt: 'signup',
    dark: false,
    primary: false,
    darkText: true,


};
