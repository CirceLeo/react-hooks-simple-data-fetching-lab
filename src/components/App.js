import react, {useEffect, useState} from 'react'

function App(){
    const [curCurURL, setCur] = useState('#')
    const [loaded, setLoaded] = useState(false)
    useEffect( () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(dod => {
            setCur(dod.message)
            setLoaded(true)
        })
    }, []
        )
    return (
        <div> 
            {loaded ? null:<p> Loading...</p>}
            <img src={curCurURL} alt='A Random Dog'></img>
        </div>
    )
}

export default App