log = console.log


// STAP 1............................................

function huiswerkMaken(vak, callback) {

    // vak = "WISKUNDE"
    log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`)

}
huiswerkMaken("WISKUNDE")


// STAP 2............................................

function huiswerkMaken(vak, callback) {

    log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`)

}
huiswerkMaken("WISKUNDE", klaarMetHuiswerk)

function klaarMetHuiswerk() {
    log("Kijk Pa/Ma, ik ben klaar met mijn huiswerk!")
}
huiswerkMaken("WISKUNDE", klaarMetHuiswerk())

// STAP 4............................................

function huiswerkMaken(vak, callback) {
    setTimeout(() => {
        log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`)

    }, 2000);
}
huiswerkMaken("WISKUNDE")
