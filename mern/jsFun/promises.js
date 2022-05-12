const isBreadAvailable = true;

const qtyBreads = 4;

const buyBread = new Promise((resolve, reject) => {
    if(isBreadAvailable) {
        const response = {
            msg: 'Aquí está el pancito, ya puedes empezar a preparar la once',
            isAvailable: isBreadAvailable
        }
        resolve(response);
    } else {
        const error = new Error('Lo siento, no había pancito hagamos panqueques');
        reject(error);
    }
});

const breadsAvailableinBakery = new Promise((resolve, reject) => {
    const breadsInBakery = 5;
    if(qtyBreads <= breadsInBakery) {
        resolve(qtyBreads);
    } else {
        reject(new Error('no hay suficientes panes, debe pedir una cantidad menor'));
    }
})


// ES5
const oncePrep = () => {
    console.log('pasé x acá');
    buyBread
        .then(resp => console.log(resp))
        .catch(err => console.log(err));
    console.log('finalmente estoy acá');
}

// ES7 - Async/Await
const oncePrepWithAsync = async () => {
    try {
        console.log('pasé x acá'); //1
        const response = await buyBread;
        console.log("🚀 ~ file: promises.js ~ line 29 ~ oncePrepWithAsync ~ response", response)//2
        console.log('finalmente estoy acá'); //3
        return response;

    } catch(err) {
        console.log("🚀 ~ file: promises.js ~ line 31 ~ oncePrepWithAsync ~ err", err)

    }
}

const goToBakeryForBread = async () => {
    try {
        const response = await breadsAvailableinBakery;
        console.log("🚀 ~ file: promises.js ~ line 54 ~ goToBakeryForBread ~ response", response);

    } catch(err) {
        console.log("🚀 ~ file: promises.js ~ line 58 ~ goToBakeryForBread ~ err", err)

    }
}

// oncePrep();
// oncePrepWithAsync();
goToBakeryForBread();