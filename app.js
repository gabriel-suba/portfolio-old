const projects = document.querySelectorAll('.project')

const options = {
	// threshold: 0,
	rootMargin: '-300px'
}

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle("show", entry.isIntersecting)
		if (entry.isIntersecting) observer.unobserve(entry.target)
	})
}, options)

projects.forEach(project => {
	observer.observe(project)
})