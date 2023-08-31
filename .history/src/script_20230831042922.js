const counter = document.getElementById("counter");

const fps = {
    default: 59,
    min: 57,
    max: 60,
    chanceOfDefault: 50
}
const interval = {
    min: 100,
    max: 300
}

var fpsTimeout;

const getNextIntervalTime = () => {
    return Math.floor(Math.random() * (interval.max - interval.min) ) + interval.min;
}

const getNextFps = () => {

    let chancePercentage = Math.floor(Math.random()*100) + 1;

    if (chancePercentage <= fps.chanceOfDefault) return fps.default;

    return Math.floor(Math.random() * (fps.max - fps.min + 1) ) + fps.min;
}

const setNextInterval = () => {
    fpsTimeout = setTimeout(()=>{

        counter.innerText = getNextFps();

        setNextInterval();
    }
    ,getNextIntervalTime())
}

const main = () => {
    setNextInterval();
}

main();