
async function apiRequest(userInput) {
    const response = await fetch(`https://api.pokemontcg.io/v2/cards/?q=name:${userInput}&pageSize=1`, {
        method: "GET",
        headers: {
            "X-Api-Key": ''
        }
    })
    const parsedResponse = await response.json()
    console.log(parsedResponse)
    return parsedResponse
}

async function sendRequest() {
    const inputBox = document.getElementById('inputBox')
    userInput = inputBox.value
    console.log(userInput)
    return await apiRequest(userInput)
}
