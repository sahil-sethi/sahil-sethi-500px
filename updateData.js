	// Function to run when wanting more photos
	const loadMore = e => {
		// Incrementing the page query param for every time the button is clicked
		page++;
		// Setting the addFlag variable to BUTTON in this case, as to add to the current photos
		addFlag = e.target.tagName;
		// Call the fetchPhotos function to make another 500px API call
		fetchPhotos(term);
	};

	// Setting up a click event listener for the loadMore button
	document.getElementById('loadMore').addEventListener('click', loadMore);

	// Setting up mousover and mouseout event listeners to target solely images for a hover effect
	document.getElementById('container').addEventListener('mouseover', e => {
		if(e.target.parentNode.className === 'image') e.target.nextElementSibling.style.display = 'block';
	});

	document.getElementById('container').addEventListener('mouseout', e => {
		if(e.target.parentNode.className === 'image') e.target.nextElementSibling.style.display = 'none';
	});