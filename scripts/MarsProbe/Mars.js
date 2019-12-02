
const MarsComponent = (mars) => {
  return `
  <div class="mars">
    <h4>${mars.camera.name}</h4>
    <img src="${mars.img_src}" class = "mars__img">
  </div>
  `
}

export default MarsComponent


