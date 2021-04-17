const View = {
    render({ minutes, seconds }) {
        document.body.innerHTML = `
        <p>Te lembrando em</p>
        <span>${minutes}:${seconds}</span>
        `
    }
}


export { View }