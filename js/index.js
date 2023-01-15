let userName = prompt(`Lütfen sistemde gözükmesini istediğiniz adınızı giriniz!`)
if(userName.trim() == ``){
    alert(`Kullanıcı bilginizi eksiksiz giriniz!`)
    window.location.reload()
}

let myName = document.querySelector(`#myName`)
myName.innerHTML = `${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()}`
 console.log(`Merhaba, ${myName}! Hoşgeldin!`);


 
function time() {
    let date = new Date().toLocaleString('tr-TR');
    document.getElementById('myClock').innerHTML = date;
}
setInterval(time,1000)