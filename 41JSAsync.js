// function uno(){
//     console.log("I m one");
// };


const uno = ()=>{
    console.log("I m one");
};

const dos = ()=>{
    setTimeout(()=>{            //one of async
        console.log("WoooHooooo");
    },3000);
    console.log("I m two");
};

const tres = ()=>{
    console.log("I m three");
};





uno();
dos();
tres();
