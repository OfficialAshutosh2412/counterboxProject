// submit button function...

const outcome = () => {
    let box = document.getElementById('textBox').value;
    let boxlen = box.length;
    box = box.match(/\w+/g);
    alert("total letters = " + boxlen + "\n" + "total words = " + box.length);
}

//copy text functionality....

const copyData = () => {
    let data = document.getElementById("textBox");
    data = data.select();
    document.execCommand('copy');
}   

// enter key press functionality...
let input = document.getElementById('textBox');
input.addEventListener('keydown', function(event){
    const key = event.key;
    key.trim();
    if(key === "Enter"){
        let box = document.getElementById('textBox').value;
        let boxlen = box.length;
        box = box.match(/\w+/g);
        alert("total letters = " + boxlen + "\n" + "total words = " + box.length);
    }
})
