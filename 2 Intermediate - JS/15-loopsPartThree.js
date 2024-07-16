const names = ["Youtube", "FaceBook", "Instagram", "Netflix", "Amazon"]

for(const n of names){
    console.log(n);
}

const symbols = {
    yt: "Youtube",
    fb: "FaceBook",
    ig: "Instagram",
    nf: "Netflix",
    nigga: "nigga.com",
}

for(const n in symbols){
    console.log(`Key is ${n} and value is: ${symbols[n]}`);
}