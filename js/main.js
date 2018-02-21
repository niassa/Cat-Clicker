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

// Function to make cat picture clickable and trace clicks
$('body').click(function(e) {

	var target = $(e.target);

	for (var i = 0; i < cat.name.length; i++) {
		var ifTarget = "#" + cat.id[i];
    	// console.log(ifTarget);
    	if (target.is(ifTarget)) {
    		var newCount = cat.count[i];
    		newCount = newCount+1;
    		cat.count[i] = newCount;
    		newCount.toString();
    		$countID = "#count" + i;
    		$($countID).text(newCount);
    	}
    }
});

// This is the function that determines which cat is selected from the drop-down list, and then changes the cat picture and info to the selected cat.
var $catSelect = $("#catSelect");
$catSelect.change(function() {
	var $contentChild = $('.content').children();

	for (var i = 0; i < $contentChild.length; i++) {
		$contentChild[i].remove();
	}
	if ($catSelect.val() === "blank") {
		$('.content').append(blankTxt);
	} else {
		var catNum = $catSelect.val().split("cat")[1];
		parseInt(catNum);
		catNum--;
		$catID = "#" + cat.id[catNum];
		$countID = "#count" + catNum;
		var header = '<h2>' + cat.name[catNum] + '</h2>';
		var image = '<img src="' + cat.imgURL[catNum] + '" alt="' + cat.imgAlt[catNum] + '" id="' + cat.id[catNum] + '">';
		var pText = '<p>You have clicked the cat <span id="count' + catNum + '">'+ cat.count[catNum] + '</span> times!</p>';
		$('.content').append(header + image + pText);
	}
});