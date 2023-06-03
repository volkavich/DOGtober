let btn = document.getElementById("btnClick")
let image = document.getElementById("image")

btn.addEventListener("click", function(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(result => {
            console.log(result)
            image.src = result.message
        })
        .catch(err => console.log(err))
})

window.onload = () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
    })
    .catch(err => console.log(err))
}