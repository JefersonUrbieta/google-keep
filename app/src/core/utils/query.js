export default (name) => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(name)
}
