
 var a=[
    {
    "fungi":"pleurotus",
    "link":"./pleurotus.html"
},
    {
    "fungi":"mychorhiza",
    "link":"./mychorhiza.html"
}
]
function record() {
document.getElementById('o').placeholder ="listening";
    var recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.onresult = function(event) {
document.getElementById('o').value=event.results[0][0].transcript;}
recognition.onerror = function(error) {
document.getElementById('o').value= "Enter the name of fungi";
    alert(error);
}
recognition.start();
    
    
};
  function show(){
document.getElementById('sidebar').style.width="100%";

    }
function cl(){
document.getElementById('sidebar').style.width="0";

    }
    function search(){
        var query =document.getElementById('o') ;
        for(i=0;i<a.length;i++){
if(a[i].fungi==query.value){
    
    document.getElementById('form').action=a[i].link;
    
}
        }
    }

