	// Function to fetch our photos, adding the query as the final piece of our URL
	const fetchPhotos = query => {
		// Using template literals to build out the URL argument that fetch requires
		fetch(`${baseUrl}${photoSearchUrl}?consumer_key=${consumerKey}&term=${query}&page=${page}`)
			// .then block to return the JSON value of our fetch call's response
		  	.then(response => response.json())
		  	// . then block to 
		  	.then(data => {
		  		// Storing the photos array from our response into our empty photoData array
		  		photoData = data.photos;
		  		// Storing the returned filtered data we require into displayData
		  		displayData = getDisplayData();
		  		// Render out the initial HTML
		  		renderHTML();
		  	// Have a catch all at the bottom of our fetch call to discover potential errors
		  	}).catch(alert);
	};

	// Function to get the specific display data required
	const getDisplayData = () => {
		// Using map and object destructuring to return the data points we require
		return photoData.map( photo => {
			const {
				image_url,
				comments_count,
				votes_count,
				full_name = photo.user.fullname
			} = photo;
			return {
				image_url,
				comments_count,
				votes_count,
				full_name
			};
		});
	};
