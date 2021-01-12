var returnLiving = true
var gameEnd = true
var choice = false
var sceneHouse = false

alert('You are dead.')
var choice = prompt('Do you wish to return to the living? yes, no, or unsure')

if (choice === 'no') {
    returnLiving = false
    alert('Enjoy the after-life.')
    gameEnd = true

} else if (choice === 'yes') {
    returnLiving = true
    prompt('Would you like to return the scene of the accident or visit your house? select scene or home')

}else (choice === 'unsure') {
    returnLiving = true
    prompt('It is time for you to make a choice.')

}if (!gameEnd) {
    prompt("scene or house")

}if (choice === 'scene') {
    returnLiving = false
    alert('You find your body and return to the land of the living.')
    gameEnd = true

}else (choice === 'house') {
       prompt('You see your family and make peace with your fate.')
       gameEnd = true