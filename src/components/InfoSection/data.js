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
    topLine: "About Us",
    headLine: "Designed to improve user's skills",
    description: "This Application is designed to make you a better Software Developer. If you are a beginner that is no problem as we have categories fort all levels  ",
    buttonLabel: "Get Started",
    imgStart: false,
    img: require("../../images/svg-1.svg"),
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
    description: "Take our training courses with our application and receive a certificate of completion. Its for developers of all skill levels. ",
    buttonLabel: "Learn More",
    imgStart: true,
    img: require("../../images/svg-2.svg"),
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
    topLine: "Take Quiz",
    headLine: "Test Your Progress",
    description: "Once you feel confident in your abilities, test yourself through the quiz section of the application. There are multiple categories as well as  difficulties for users to try! ",
    buttonLabel: "Get Started",
    imgStart: false,
    img: require("../../images/svg-3.svg"),
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
    topLine: "Sign-Up",
    headLine: "Create an account today!",
    description: "To create an account click the Sign In/Regsiter button at the top of the screen. Once you register an account you will gain access to all of the applications benefits ",
    buttonLabel: "Start Now",
    imgStart: false,
    img: require("../../images/svg-4.svg"),
    alt: 'signup',
    dark: false,
    primary: false,
    darkText: true,


};
