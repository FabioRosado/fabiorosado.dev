const fetch = require('node-fetch')

exports.handler = async (event, context, callback) => {
    const data = JSON.parse(event.body)
    data['api_key'] = process.env.GATSBY_BOOK_API

    console.log(data)
    console.log(process.env.GATSBY_BOOK)

    const request = await fetch(process.env.GATSBY_BOOK, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    })

    const response = await request.json()

    console.log(response)

    await callback({status: response.status, body: response.body})

}