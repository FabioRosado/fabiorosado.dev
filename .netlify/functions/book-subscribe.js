const fetch = require('node-fetch')

exports.handler = async (event, context, callback) => {
    const data = JSON.parse(event.body)
    data['api_key'] = process.env.GATSBY_BOOK_API

    console.log(data)

    await fetch(process.env.GATSBY_BOOK, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    })
    .then( response => {
        console.log(response)
        await callback({status: 200, body: JSON.stringify("Sent!")})
    })
    .catch(e => await callback({status: 500, body: JSON.stringify(e)}))
}