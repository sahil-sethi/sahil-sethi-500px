	// Function to render HTML elements with our display data
	const renderHTML = () => {
		// Conditional to check if the FORM submit button was clicked for this interaction
		// Empty out the container for a fresh query
		if(addFlag === 'FORM') document.getElementById('container').innerHTML = "";
		// Declaring a variable to hold our html content block
		let html =  ``;
		// Add the new content block to the html variable for each object in displayData 
		displayData.forEach((image) => {
			// Using template literals again to type HTML markup more naturally
			html += 
			`<div class="image">
				<img src=${image.image_url}>
				<div class="imageData">
					<p class="comments">Comments | <strong>${image.comments_count}</strong></p>
					<p class="votes">Votes | <strong>${image.votes_count}</strong></p>
					<p class="fullname">Name | <strong>${image.full_name}</strong></p>
				</div>
			</div>`;
		});
		// Add the full html content to the container ready for data injection
		document.getElementById('container').innerHTML += html;
	};


	