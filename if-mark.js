const prompt = require("prompt-sync")({sigint:true});

let mark = prompt("enter the marks =");

if(isNaN(mark)){
    console.log(`Opps! You are a fool`);
}else if( mark >= 80 && mark <=100){
    console.log(`A grade`);
}else if( mark >= 60 && mark <=79){
    console.log(`B grade`);
}else if( mark >= 40 && mark <=59){
    console.log(`c grade`);
}else if( mark >= 30 && mark <=39){
    console.log(`d grade`);
}else if( mark >= o && mark <=29){
    console.log(`sorry, you are failed`);
}else if(mark < 0 || mark >100){
    console.log(`Oops! you are a fool`);
}