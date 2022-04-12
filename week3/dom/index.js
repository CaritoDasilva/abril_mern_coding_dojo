function greet() {
    const username = document.getElementById('username').value;
    console.log("🚀 ~ file: index.js ~ line 3 ~ greet ~ username", username)
    // console.log(`Hola ${name}`);
    // alert(`Hola ${username}`);
    document.getElementById("message").innerHTML = username;
};

function onHover() {
    console.log('Acabas de hacer hover');
    let h1 = document.getElementsByTagName('h1')[0];
    h1.style.backgroundColor = 'red';
    console.log("🚀 ~ file: index.js ~ line 12 ~ onHover ~ h1", h1);
};

function hoverLeft() {
    let h1 = document.getElementsByTagName('h1')[0];
    h1.style.backgroundColor = 'white';
}