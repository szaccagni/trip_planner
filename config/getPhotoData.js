module.exports = async function getPhotoData(query) {
    const data= await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, 
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: process.env.PEXELS_API_KEY
        },
    })
    const response = await data.json()
    return response
}