const word = 'unfortunately   '
let currentIndex = 0

const handleKey = (e) => {
    console.log(e.key)
    if (e.key === word[currentIndex]) {
        console.log('successful')
        currentIndex++
        if (currentIndex === word.length) {
            console.log('u won')
            window.removeEventListener('keydown', handleKey)
        }
    } else {
        console.log('fucku')
    }
}
window.addEventListener('keydown', handleKey)

// for (let i = 0; i < word.length; i++) {
//     console.log(word[i])
// }
