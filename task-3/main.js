const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input;
    let count_2 = 0;
    let count_5 = 0;

    for(let i=0; i<n.length; i++){
        if(n[i]==2){
            count_2++;
        }else if(n[i]==5){
            count_5++
        }
    }
    if(count_2>count_5){
        console.log("2");
    }else if(count_5>count_2){
        console.log("5");
    }else{
        console.log("=");
    }
    
});
