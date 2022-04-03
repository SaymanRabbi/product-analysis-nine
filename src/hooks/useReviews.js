const { useState, useEffect } = require("react")

const useReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('data.json').then(res=>res.json()).then(data=>setReviews(data))
    }, [])
    return [reviews, setReviews]
}
export {useReviews}