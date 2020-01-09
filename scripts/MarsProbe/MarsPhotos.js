import { usePhotos } from "./MarsProbeData.js"
import MarsComponent from "./Mars.js"
const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".MarsPhotos")

const MarsProbeComponent = () => {

  eventHub.addEventListener("click", clickEvent=>{
if(clickEvent.target.classList.contains("tempbutton")){
  console.log("working on it")
  render()
}



  })
  

  const render = () => {
    const photographs = usePhotos()
    
    contentElement.innerHTML += `
          ${photographs.map(
      (pic) => { return MarsComponent(pic) }
    ).join("")}
    
  `

  }

}


export default MarsProbeComponent