function runImagePreload() {
	for (var i = 0; i < cat.imgURL.length; i++) {
		var image = '<img class="imgPreloader" src="' + cat.imgURL[i] + '">';
		$('.content').append(image);
	}
};

runImagePreload();

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