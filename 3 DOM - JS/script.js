var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval( () => {
    if (count < 1000) {
        count++;
        counter.innerHTML = count;
    }
}, 1);

setTimeout(() => {
    followers.innerText = "Follower's On Instagram!";
}, 5000);