
export async function retrieve(url = '', data = {}, method) {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

export async function doRequest(urlPart = '', data= {}, method) {
    let url = "http://localhost:8080" + urlPart;
    let response = await retrieve(url, data, method);

    if (response.ok) {
        return response.status === 204 ? response : response.json();
    } else {
        let message;
        try {
            message = (response.json()).message || response.error;
        } catch(e) {
            message = response.error;
        }
        throw new Error(message);
    }
}