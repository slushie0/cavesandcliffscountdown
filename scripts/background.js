
$.getJSON("bgpointers.json", function(json) {

    // Choose a random number for the background
    var n = Math.floor(Math.random()*json.arr.length);
    console.log(n)

    var i = json.arr[n];

    // Get image size
    var bgScaler = $(".background-image-scaler");
    bgScaler.attr('src', 'backgrounds/'+i+'.jpg')
    document.querySelector(".background-image-scaler").addEventListener("load", function(){
        var width = this.naturalWidth, height = this.naturalHeight;
        var bWidth = window.innerWidth, bHeight = window.innerHeight;
        if (width/bWidth > height/bHeight) {
            $(document.body).css("background-size", "auto 100%");
        }
    });
    $(document.body).css("background-image", 'url("./backgrounds/'+i+'.jpg")');
});