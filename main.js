const broadCast = (message) => {
    return message();
}

const announceRain = () => {
    return console.log("Grab an umbrella. It's going to rain today.");
}

const announceClear = () => {
    return console.log("Grab your shades and sunscreen. It's going to be sunny and hot today.");
}

const weatherStation = (humidity) => {
    if (humidity > 95) {
        broadCast(announceRain);
    } else {
        broadCast(announceClear);
    }
}

weatherStation(100);
weatherStation(90);