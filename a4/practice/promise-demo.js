const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject(new Error('URL is required'))
        }

        console.log(`Fetching data from ${url}...`)

        setTimeout(() => {
            const data = { id: 1, name: 'John Doe' }
            resolve(data)
        }, 2000)
    })
}

fetchData()
    .then(data => {
        console.log('Data received:', data)
    })
    .catch(error => {
        console.error('Error fetching data:', error)
    })


