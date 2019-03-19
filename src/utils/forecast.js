const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = ' https://api.darksky.net/forecast/ddbf1a50b137bc18fa75b80d1428642d/' +  latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // console.log(body.daily .data[0]);
        // console.log( body.daily.data[0].temperatureHigh);
        // console.log( body.daily.data[0].temperatureLow);  
            
       
            callback(undefined, body.daily.data[0].summary + ' It is currently ' +parseInt( ((( body.currently.temperature)-32)*(5/9) ))+ '° Celsius out.'+'and its tempreture in morning is '+parseInt( ((body.daily.data[0].temperatureHigh-32)*(5/9) ) )+'° Celsius and its tempreture in evening is '+parseInt( ((body.daily.data[0].temperatureLow -32)*(5/9) )) +'° Celsius There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast