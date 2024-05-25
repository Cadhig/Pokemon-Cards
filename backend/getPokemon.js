require('dotenv').config()
async function apiRequest() {
    const response = await fetch(`https://api.pokemontcg.io/v2/cards/?q=name:charizard&pageSize=1`, {
        method: "GET",
        headers: {
            "X-Api-Key": process.env.APIKEY
        }
    })
    const parsedResponse = await response.json()
    console.log(parsedResponse)
    return parsedResponse
}

module.exports(apiRequest)