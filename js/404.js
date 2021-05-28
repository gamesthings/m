document.onload = function() {
    // iterate over any item with the 'redX' class attribute
    [...document.getElementsByClassName('redX')]
        .forEach(function(item){
            item.addEventListener('click', function(){
                document.getElementById('popup').remove();
            })
        });

}
