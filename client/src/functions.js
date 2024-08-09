export async function postData(endpoint, data) {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if(!response.ok) {
        throw new Error(`Error sending data: ${response.status}`);
    }
    return response.json();
}
export async function fetchData(endpoint) { 
    const response = await fetch(endpoint);
    if(!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();
    return data;
}