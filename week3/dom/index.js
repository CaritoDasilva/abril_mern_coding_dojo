function greet() {
    const input = document.getElementById('inputMessage').value;
    console.log("🚀 ~ file: index.js ~ line 3 ~ greet ~ username", input)
    // console.log(`Hola ${name}`);
    // alert(`Hola ${username}`);
    document.getElementById("message").innerHTML = input;
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

function onHoverInPic(element) {
    element.src = 'https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419';
}

function hoverLeftInPic(element) {
    element.src = 'https://cdn.dribbble.com/users/844597/screenshots/9008058/media/a8bfc3cd2e71a304a02d8729bcffa132.png?compress=1&resize=400x300';
} 

function post(event, element) {
    console.log("🚀 ~ file: index.js ~ line 30 ~ post ~ event", element)
    if (event?.keyCode === 13 && element?.value !== '' || event.type === 'submit') {
        const messageArea = document.getElementById('messageArea');
        const inputMessage  = document.getElementById('inputMessage');
        if(inputMessage.value === '') {
            inputMessage.value = '';
        } else {
            console.log("🚀 ~ file: index.js ~ line 34 ~ post ~ inputMessage.value", inputMessage.value)
            const rowPost = document.createElement('div');
            const postDiv = document.createElement('div');
            const textPost = document.createElement('p');
            const textNodePost = document.createTextNode(inputMessage.value);
            textPost.appendChild(textNodePost);
            postDiv.appendChild(textPost);
            rowPost.appendChild(postDiv);
            messageArea.prepend(rowPost);
            rowPost.classList.add('row', 'justify-content-md-center');
            postDiv.classList.add('col-8', 'post-card');
            inputMessage.value = '';

        }
    } else {
        inputMessage.value = '';
    }
};