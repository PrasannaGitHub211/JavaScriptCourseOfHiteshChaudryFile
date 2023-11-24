// for loop

for(let i=0;i<10;i++)
{
    console.log(i);
}

const states = ["Karnataka","Kerala","Goa",1947,"TamilNadu","AndraPradesh","Maharashtra"];
for(let i=0;i<states.length;i++){
    console.log(states[i]);
}

for(let i=0;i<states.length;i++){
    if(typeof states[i]=='string'){
        console.log(states[i]);
    }
   
}