// GO!

var inputNode = document.querySelector('#add-guest input')
var ulNode = document.querySelector('.guest-list')


//addEventListener takes two inputs an  action (or event name) and the function to handle the event 
//pass the event name as a string
//addEventListener is a method that can be added to any domNode object. in this case the inputNode

// callbacks are functions that we define but do not call ourselves

//the event object is what gets passed into the enterName function. the computer knows that it's there. *** look up event handlers
var enterName = function(eventObj){
	//check for the enter key
	if(eventObj.keyCode === 13){
		//grab the input text
		var inputNode =eventObj.target //could have written like eventObj.target.value
		var guest = inputNode.value
		// put it onto the list

		ulNode.innerHTML += '<li class="guest">'+ guest + '</li>'
		//this code clears the inputNode after the enter button is pressed 
		 inputNode.value = ''
	}



}
inputNode.addEventListener('keydown', enterName)


window.inputNode = inputNode



var menuNode = document.querySelector('.nav-menu')
var hideNode = document.querySelector('.hideNav')

var navState = {
	hidden: false
}

//I fell into the answer for this toggle. I am not quite sure how it works. Can we please review?
 
var clickNav = function (){
	if (navState.hidden){
		menuNode.style.opacity = '1'
		navState.hidden === false
	}

	if (menuNode.style.opacity === '0'){
		menuNode.style.opacity = '1'
		navState.hidden === false
		hideNode.innerHTML = 'hide nav'
	}

	else {
		menuNode.style.opacity = '0' 
		navState.hidden === true
		hideNode.innerHTML = 'show nav'
		
	}

}

//establish event
hideNode.addEventListener('click', clickNav)

// problem 3
var newInputNode = document.querySelector('#add-guest-bonus input')
var newUlNode = document.querySelector('#add-guest-bonus .guest-list')

var addName = function(eventObj){
	if (eventObj.keyCode === 13){
		var newInputNode = eventObj.target 
		var addedGuest = newInputNode.value

		newUlNode.innerHTML = '<li>' + addedGuest + '<div class = "box">' X '</div>' + '</li>'

	}



}




newInputNode.addEventListener('keydown', enterName)

