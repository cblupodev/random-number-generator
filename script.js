window.onload = function() {
    try {
        var store = localStorage.getItem('nums');
        store = JSON.parse(store);
    }
    catch (e) {}
    var rslts = document.querySelector('ul');
    var minInput = document.querySelector('#min');
    var maxInput = document.querySelector('#max');
    if (store !== null) {
        minInput.value = Number(store.minStore);
        maxInput.value = Number(store.maxStore);
    }

    document.getElementById('reset').onclick = function() {
        document.getElementById('list').innerHTML = '';
    };

    document.onsubmit = function(e) {
        e.preventDefault();
        var min = Number(minInput.value);
        var max = Number(maxInput.value);
        localStorage.setItem('nums', JSON.stringify({
            minStore: min,
            maxStore: max
        }))
        var record = document.createElement('li');
        record.textContent = Math.floor((Math.random() * (max - min)) + Number(min));
        rslts.insertBefore(record, document.querySelector('li:first-of-type'));
    }
};