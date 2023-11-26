const getWorld = async () => {
    const reponse = await fetch('./netlify/functions/hello-world').then(response = response.json)
    responseText.innerText = response
}
export default getWorld