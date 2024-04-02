const apiKey = "42629711466e64b91edc74420e98f805"

const getWeather = async (city)=>{
    // return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    // .then((res)=>res.json())
    // .then((json)=>{
    //     return json
    // })
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apiKey}`
    let response = await fetch(url)
    let data = response.json()
    return data

}
export default getWeather