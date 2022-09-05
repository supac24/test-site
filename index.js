
let decrease_button = document.querySelector('#decrease')
let increase_button = document.querySelector('#increase')

decrease_button.addEventListener('click', () => {
    let value = document.querySelector('#value')
    if (value.textContent > 0){ 
        updated_value = value.textContent - 1
        value.innerHTML = updated_value
    }
})


increase_button.addEventListener('click', () => {
    let value = document.querySelector('#value') 
// This is important to not put numbers on a string. Use intergers 
    updated_value = parseInt(value.textContent) + 1
    value.innerHTML = updated_value
})
