import { usePhotos } from "./MarsProbeData.js"
import MarsComponent from "./Mars.js"


const MarsProbeComponent = () => {
  
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".ProbePhoto")
  const photographs = usePhotos()
  
 
  contentElement.innerHTML += `
      <section class="photoList">
          ${photographs.map(
            (pic) => {return MarsComponent(pic)}
            ).join("")}
      </section>
  `
}


export default MarsProbeComponent