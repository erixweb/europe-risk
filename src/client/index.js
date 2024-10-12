const paths = document.querySelectorAll("path")

paths.forEach((path) => {
    console.log("E")
    path.addEventListener("mouseenter", () => {
        path.style.fill = "red"
        console.log("E")

    })
})