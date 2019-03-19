const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = ' https://api.darksky.net/forecast/ddbf1a50b137bc18fa75b80d1428642d/' +  latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' +((( body.currently.temperature)-32)*(5/9) )+ '° Celsius out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast