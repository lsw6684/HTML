h1a = document.getElementsByTagName('h1');
for ( i = 0; i<h1a.length; i++){
    h1a[i].onclick = function(){
        alert(this.innerHTML)
    }   
}

h2a = document.getElementsByTagName('h2');
for( i = 0; i<h2a.length; i++){
    h2a[i].addEventListener('click', function(){
        alert(this.innerHTML);
    })
}

$('h3').on('click', function(){
    alert(this.innerHTML);
})

$('h4').click(function(){
    alert($(this).html());
})
