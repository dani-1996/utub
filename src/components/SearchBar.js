import React ,{ useState} from "react"
import "./VideoItem.css"

const SearchBar = ({onFormSubmit})=> {
const [term, setTerm] = useState("")


const onSubmit = (event) =>{
    event.preventDefault()
    onFormSubmit(term)
}


return(
    <div>
    <h1 classname="test"  >UTUB</h1>
    <div className="ui segment search-bar">
     
        <form onSubmit={onSubmit} 
         className="ui form">
            <div className="field">
           
            <label> </label>
                <input
                 value={term}
                 type="text"
                 onChange={(event) => setTerm(event.target.value)}
                 placeholder="Top 5 beaches"   
                 />
                 <div class="ui pointing label">Suche ein Video</div>
           
            </div>
        </form>
    </div>
    </div>
  ) 

}


export default SearchBar