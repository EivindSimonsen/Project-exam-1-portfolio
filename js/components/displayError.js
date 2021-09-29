function displayError(message) {

    if (!message) {
        message = "Unknown error";
    }

    return `<div class="error">${message}</div>`;
}