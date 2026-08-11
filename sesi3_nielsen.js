const rows = 4

for (let i = 0; i < rows; i++) {
    let stars = ""

    for (let j = 0; j <= i; j++) {
        stars += "*"
    }
    console.log(stars)
}