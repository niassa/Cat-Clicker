// this is my javascript

var $catID = "";
var $countID = "";
var startSel = '<select id="catSelect">';
var endSel = '</select>';
var optTagOpen = '<option value="';
var optTagBlank = '<option value="blank">Select a picture from the list</option>';
var optTagClose = '</option>';
var blankTxt = '<strong>Select a cat image from the drop-down to the right.</strong>';

var cat = {
	name: ["Severus Asleep in Front of Fireplace", "Severus Wants Steak", "Severus Won't Let Me Work", "Severus is a Pretty Kitty", "Severus Has Huge Paws!"],
	imgURL: ["imgs/fireplaceCat.jpg", "imgs/iWantSteak.jpg", "imgs/lyingOnComp.jpg", "imgs/prettyKitty.jpg", "imgs/sittingOnArm.jpg"],
	imgAlt: ["Severus curled up in front of the fireplace", "Severus staring at a steak on a plate", "Severus Lying on a Computer", "Severus reaching out a paw", "Severus with one paw extended down"],
	id: ["cat1", "cat2", "cat3", "cat4", "cat5"],
	count: [0,0,0,0,0],

	display: function() { //This is the function that actually loads the display initially
		$('.content').append(blankTxt);
		$('.right-sidebar').append(startSel + optTagBlank);
		for(var i = 0; i < cat.name.length; i++) {
			var optionVal = cat.id[i];
			var optionName = cat.name[i];
			$('#catSelect').append(optTagOpen + optionVal + '">' + optionName + optTagClose)
		}
		$('.right-sidebar').append(endSel);
	}
};

cat.display();

