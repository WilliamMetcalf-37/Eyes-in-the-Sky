const OTDComponent = (photo) => {
  return `
<h3>${photo.title}</h3>
<img class ="photoOTDImg" src=${photo.url}>
<div>${photo.explanation}</div>
  `
}

export default OTDComponent