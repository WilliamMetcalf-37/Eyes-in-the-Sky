
const MarsComponent = (mars) => {
  return `
  <div class="MarsCard">
    <h4>${mars.camera.name}</h4>
    <img src="${mars.img_src}" class = "mars__img">
    <div id="marsEarthDate">${mars.earth_date}</div>
    <button class="addToFavorites">Add to Favorites</button>
  </div>
  `
}

export default MarsComponent


