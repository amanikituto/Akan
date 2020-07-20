let male_names = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
]

let female_names = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
]

function get_name(day, month, year, gender) {
    let js_date = new Date(year, month - 1, day)
    let day_index = js_date.getDay()
    console.log(day_index);
    if (gender == 'female') {
        return female_names[day_index]
    } else {
        return male_names[day_index]
    }
}

function submit_form(event) {
    event.preventDefault()
    let day = document.querySelector("#day").value
    let month = document.querySelector("#month").value
    let year = document.querySelector("#year").value
    let gender = document.querySelector("#gender").value

    alert("Success ! Your Akan name is " + get_name(day, month, year, gender))
}