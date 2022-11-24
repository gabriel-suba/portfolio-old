const projects = document.querySelectorAll('.project')
const section_header = document.querySelector('.section-header')
const about_title = document.querySelectorAll('.about__title')
const about_paragraph = document.querySelectorAll('.about__paragraph')
const about_name = document.querySelector('.about__name')

const options = {
	threshold: 0.2,
	// rootMargin: '-300px'
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

about_title.forEach(title => {
	observer.observe(title)
})

about_paragraph.forEach(paragraph => {
	observer.observe(paragraph)
})

observer.observe(section_header)

observer.observe(about_name)