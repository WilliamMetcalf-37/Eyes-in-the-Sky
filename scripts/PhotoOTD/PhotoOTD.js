import { useOTDPhotos } from "./PhotoOTDDataProvider.js"
import OTDComponent from "./OTD.js"


const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".PhotoOTD")

const PhotoOTDComponent = () => {



  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.classList.contains("tempbutton")) {
      console.log("working on it")
      render()
    }





  })
      const render = () => {
        const OTDphoto = useOTDPhotos()
        contentElement.innerHTML +=
          `
  ${OTDComponent(OTDphoto)}
  `
  
      }
}

export default PhotoOTDComponent