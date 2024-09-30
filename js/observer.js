const observer = newIntersectionObserver((entries) => {
    entries.foreach((entry) => {
        if (entry.intersecting) {
            entry.target.classlist.add("in-view")
        }
    })
}, {
    rootMargin: "0px",
    threshold: [0, 1, 10]
})

const tags = document.querySelectorAll(main)

tags.forEach((tags) => {
    observer.observe(tag)
})