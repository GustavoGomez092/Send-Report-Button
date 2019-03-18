document.getElementById('executeSend').addEventListener('click',

    function loadXMLDoc() {
        const Http = new XMLHttpRequest();
        const url = 'http://localhost:5000/sendEmails';
        Http.open("POST", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            console.log(Http.responseText)
        }
    }
    
)

