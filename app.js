	// Creating constants for the URL, photo search resource path, and consumer key
	const baseUrl = 'https://api.500px.com/v1/';
	const photoSearchUrl = 'photos/search';
	const consumerKey = 'SIwRLq0AwiEydJeCT8NLk3chVNyEMgweH52bQVx5';
	// Creating lets for the page and term which change based on user interaction
	let page;
	let term;

	// Create an empty array to store the photoData as well as the filtered data we need
	let photoData = [];
	let displayData = {};

	// Setting a flag to either load more photos or submit a fresh query
	let addFlag;

	// Function to handle the initial user search
	const getUserSearch = e => {
		// Prevent page refresh
		e.preventDefault();
		// Inititalize page query param to first page
		page = 1;
		// Set addFlag to the current tagName, which is FORM in this case
		addFlag = e.target.tagName;
		// Setting our term query param to the value the user searched
		term = document.getElementById('userSearch').value;
		// Call the fetchPhotos function which performs our fetch using the term
		fetchPhotos(term);
	};