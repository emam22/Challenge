import React, { useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'

export default function SearchBar() {
const [search, setSearch] = useState("");

const handleChange=e=>{
  setSearch(e.target.value);
  console.log("Busqueda: " + e.target.value);

}
  return (
    <>
      <nav>
        <div className="nav-wrapper deep-purple accent-4">
          <form>
            <div className="input-field">
              <input id="search" type="search" required value={search} onChange={handleChange}/>
              <label className="label-icon" for="search"><i className=" medium material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </>
  )
}
