// this is my javascript

var $catID = "";
var $countID = "";


var cat = {
	name: ["Kitty One", "Kitty Two", "Kitty Three"],
	imgURL: ["imgs/cat.jpg", "imgs/cat2.jpg", "imgs/cat.jpg"],
	imgAlt: ["Cute cat #1", "Cute cat #2", "Cute Cat #3"],
	id: ["cat1", "cat2", "cat3"],
	count: [0,0,0],
	display: function() {
		for(var i = 0; i < cat.name.length; i++) {
			$catID = "#" + cat.id[i];
			$countID = "#count" + i;
			var header = '<h2>' + cat.name[i] + '</h2>';
			var image = '<img src="' + cat.imgURL[i] + '" alt="' + cat.imgAlt[i] + '" id="' + cat.id[i] + '">';
			var pText = '<p>You have clicked the cat <span id="count' + i + '">0</span> times!</p>';
			$('.kitties').append(header + image + pText);
		}
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
