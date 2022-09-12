const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input;
    let str = 0;
    for (var i = 0; i < n.length; i++) {
        if (n.length[i] < n.length) {
          n[i].charAt(0).toUpperCase();
        }
    
        str = n.join(" ");
      }
    
      //return str;
    
    console.log(str);

    });