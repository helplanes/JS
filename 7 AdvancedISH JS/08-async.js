// const one = () => {
//     console.log("I am a one");
// };

// const two = () => {
//     setTimeout(() => {
//         console.log("Yayaay");
//     }, 3000)
//     console.log("I am a two");
// };

// const three = () => {
//     console.log("I am a three");
// };

// one();
// two();
// three();

const one = () => {
    return "I am a one";
};

// const two = async() => {
//     setTimeout(() => {
//         return "I am two";
//     }, 3000)
// };

const two = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("I am two");
        }, 3000)
    });
};

const three = () => {
    return "I am a three";
};

const callMe = async () => {
    let valueOne = one();
    console.log(valueOne);

    let valueTwo = await two();
    console.log(valueTwo);

    let valueThree = three();
    console.log(valueThree);
}

callMe();

//promises:- something that is either gonna be fulfilled or not gonna get fulfilled.