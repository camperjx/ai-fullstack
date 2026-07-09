const fetchData = (url, callback) => {
    console.log(`Fetching data from ${url}...`)
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' }
        callback(null, data)
    }

    , 2000)
}
fetchData('https://api.example.com/user', (error, data) => {
    if (error) {
        console.error('Error fetching data:', error)
    } else {
        console.log('Data received:', data)
    }
})  