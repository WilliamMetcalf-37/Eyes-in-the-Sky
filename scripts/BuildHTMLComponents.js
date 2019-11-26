
const contentElement = document.querySelector("#mainHTML")

const HTMLComponent = () => {
    // Use the journal entry data from the data provider component

    contentElement.innerHTML += `    
    <section class="datePicker">
    <h1> Eyes On The Sky</h1>
    <input type="date" name="" id="date">
    
  </section>
  <article class = "dateResults">
  <section class = "Results">
  <h2>Mars Probe Photos</h2>
  <select>
  <option id ="" ></option>
  <option id ="FHAZ">FHAZ</option>
  <option id ="RHAZ">RHAZ</option>
  <option id ="MAST">MAST</option>
  <option id ="CHEMCAM">CHEMCAM</option>
  <option id ="MAHLI>MAHLI</option>
  <option id ="MARDI">MARDI</option>
  <option id ="NAVCAM">NAVCAM</option>
  <option id ="PANCAM">PANCAM</option>
  <option id ="MINITES">MINITES</option>
  </select>
  </section>
  <section class = "Results">
  <h2>Popular Photos of the Day</h2>
  </section>
  </article>
  <section class="favorites">
      <h2>Favorites</h2>
  </section>
  <section class="searchList">
    <h2>Search By whatever you want</h2>
  </section> 
    `
}
export default HTMLComponent