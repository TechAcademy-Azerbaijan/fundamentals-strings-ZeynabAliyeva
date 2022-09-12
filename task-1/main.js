const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
  let n = result.input.split(",");
  let min = n[0];

  for(let i=0; i<n.length; i++){
    if(n[i]<min){
      min = n[i]
      console.log(min);
    }
  }
});
