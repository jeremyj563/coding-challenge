function outResponse(response, value) {
    if (value) {
        response.status(200)
        response.send(value)
    } else {
        response.status(500)
        response.send('An error occurred')
    }
}

export {
    outResponse
}