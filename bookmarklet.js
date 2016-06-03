javascript: (function(){
    var storagePath = 'random-number-generator-bookmarklet';
    
    var min = 0;
    var max = 2;
    
    var storage = JSON.parse(localStorage.getItem(storagePath));
    
    if (storage !== {}) {
        min = Number(storage.min);
        max = Number(storage.max);
    }
    
    var continueV = true;
    var rtn=prompt('Enter random number range, example: 5 33. \nIf you just hit ENTER right now it will use the last number range you entered');
    var res=rtn.split(' ');
    if (rtn !== '') {
        min = Number(res[0]);
        max = Number(res[1]);
    }
    localStorage.setItem(storagePath, JSON.stringify({
        min : min,
        max : max
    }));
    var str = 'Random number between ' + min + ' and ' + (max - 1);
    console.log(str);
    while (continueV) {
        var rtn2 = prompt(str, Math.floor((Math.random()*(max-min))) + min);
        if (rtn2 === null) {
            continueV = false;
            break;
        }
    }
})();