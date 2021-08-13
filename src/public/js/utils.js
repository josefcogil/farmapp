const url = 'http://localhost:4000';

// Send POST request
const post = async (body, endpoint) => {
    let res = await fetch(`${url}${endpoint}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
        .catch(err => {
            return { err: true, err }
        })

    return res;
}

// Send PUT request
const put = async (body, endpoint) => {

    let res = await fetch(`${url}${endpoint}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
        .catch(err => {
            return { err: true, err }
        })

    return res;
}

// Disable button
const btnDisable = (btn, text) => {
    btn.setAttribute('disabled', true);
    btn.innerText = text;
}

// Enable button
const btnEnable = (btn, text) => {
    btn.removeAttribute('disabled');
    btn.innerText = text;
}