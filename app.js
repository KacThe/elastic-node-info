const data = document.getElementById('data')
const getData = document.getElementById('get-data')


async function elkdata() {
    const url = "http://localhost:9200"
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)

        }
        const result = await response.json();
        data.textContent = JSON.stringify(result, null, 2)
    } catch (error) {
        console.log(error)
    }
}


getData.addEventListener('click', elkdata)
