
const validText = document.getElementById("valid-text")


function validateEmail() {

    validText.innerText = ``;
    validText.classList.remove()
    const inputValue = document.getElementById("input").value
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // if (re.test(String(email).toLowerCase()) {
    //     console.log()
    // }

    if (re.test(inputValue)) {
        console.log("valid")
        validText.innerText = `Your email (${inputValue}) is Valid`
        validText.style.color = "green"
        validText.classList.add("text-center");

    }
    else {
        console.log("not valid")
        validText.innerText = `Your email (${inputValue}) is not Valid`
        validText.style.color = "red"
        validText.classList.add("text-center");
    }

}