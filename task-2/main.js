const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input;
    let b = parseInt(n/100) //
    let c = parseInt(n%10)
    if (b>c) {
        console.log(b);
    } else if (c>b) {
        console.log(c);
    } else{
        console.log("=");
    }
});
