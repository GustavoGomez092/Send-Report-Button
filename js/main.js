document.getElementById('executeSend').addEventListener('click',

    function loadXMLDoc() {
        document.getElementById('loader').classList.remove('hidden');
        this.disabled = true;
        this.classList.add('disabled');
        const Http = new XMLHttpRequest();
        const url = 'http://localhost:5000/sendEmails';
        Http.open("POST", url);
        Http.send();
        Http.onreadystatechange = (e) => {
          document.getElementById('loader').classList.add('hidden');
          document.getElementById('demo').innerHTML = Http.responseText;
          document.getElementById('executeSend').disabled = false;
          this.classList.remove('disabled');
        }
    }
    
)

