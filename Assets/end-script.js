console.log(window.localStorage.getItem('score'))


document.getElementById('submit').addEventListener('click', function(value){
    var initials = document.getElementById('initials').value
    window.localStorage.setItem('initials', initials)
    window.location.href = "score.html"
}) 
/**


 * redirect to high score page
 */

/**
 * high score page needs to use localStorage to display the values
 */