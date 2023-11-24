const websiteNames = ["Youtube","Facebook","Twitter","LinkedIN","Instagram"];

//for-of loop
for(const n of websiteNames){
    console.log(n);
}

const symbol = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "facebook",
    x: "twitter"
}
for(const n in symbol){
    console.log(n);
    console.log(symbol[n]);
    console.log(`Key is: ${n} and its value is: ${symbol[n]}`);
}