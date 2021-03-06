let photos = []

export const getOpportunityPhotos = () =>{

    return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=YWo2OstgC4fHLuYYEIL7Uj2qzbuvbM0mMBWgrTti")
    .then(res => res.json())
    .then(
        parsedPhotos => {

            parsedPhotos.photos.forEach(element => {
                photos.push(element)
            });
           
        }
    )
}

export const getCuriosityPhotos = () =>{

    return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=YWo2OstgC4fHLuYYEIL7Uj2qzbuvbM0mMBWgrTti")
    .then(res => res.json())
    .then(
        parsedPhotos => {
            parsedPhotos.photos.forEach(element => {
                photos.push(element)});
           
        }
    )
}
export const getSpiritPhotos = () =>{

    return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=YWo2OstgC4fHLuYYEIL7Uj2qzbuvbM0mMBWgrTti")
    .then(res => res.json())
    .then(
        parsedPhotos => {
            parsedPhotos.photos.forEach(element => {
                photos.push(element)});
           
        }
    )
}


export const usePhotos = () => {
  return photos
}
