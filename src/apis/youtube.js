import axios from "axios"

const KEY = "AIzaSyC4dUzvPwROodFzaw8e8Mdh6EZ8sMos77Q"

export default axios.create ({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{ 
        part: "snippet",
        maxResult: 5,
        key: KEY

    }
})