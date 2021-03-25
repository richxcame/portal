export default {
	handleSearch(query) {
		 return fetch(`https://api.themoviedb.org/3/search/movie?api_key=b146440b18073f3a81d51c1fbfc859b6/query=${query}`)
			.then(res => { return res })
	}
}