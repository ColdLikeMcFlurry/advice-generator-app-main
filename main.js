let btn = document.querySelector('.dice');

function generate(){
    fetch('https://api.adviceslip.com/advice')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data)
        document.querySelector('.number').textContent = `Advice #${data['slip'].id}`
        document.querySelector('.quote').innerHTML = `"${data['slip'].advice}"`
    })
    .catch(function () {

    })
};

generate();

btn.addEventListener('click', generate);