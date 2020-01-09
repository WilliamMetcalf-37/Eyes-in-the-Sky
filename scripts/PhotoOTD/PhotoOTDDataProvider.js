let OTDphotos = []

export const getOTDPhotos = () =>{

    return fetch("https://api.nasa.gov/planetary/apod?api_key=YWo2OstgC4fHLuYYEIL7Uj2qzbuvbM0mMBWgrTti")
    .then(res => res.json())
    .then(
        parsedPhotos => {

            OTDphotos = parsedPhotos
           
        }
    )
}

export const useOTDPhotos = () => {
  return OTDphotos
}
