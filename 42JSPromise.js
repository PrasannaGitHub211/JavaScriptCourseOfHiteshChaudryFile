//Promise has 2 state either its full filled or not full filled

const uno = ()=>{
    return `I m one`;
};


// const dos = ()=>{                                         //const dos = async()=>{

//     setTimeout(()=>{            //one of async
//       return `I m two`;
//     },3000);

// };


const dos = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(`I m two`);
        },3000);
    });
};



const tres = ()=>{
    return `I m three`;
};


const callMe = async ()=>{
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);

}

callMe();