import {createContext, useState, useContext, useEffect } from 'react';


export const VideosContext = createContext();

export const VideosProvider = ({children}) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Cirovsky/cinetag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        });
    }, []);

    return(
        <VideosContext.Provider value={{videos}}>
            {children}
        </VideosContext.Provider>
    )
}

export const UseVideosContext = () =>{
    const {videos} = useContext(VideosContext);
    return{
        videos,
    }
}