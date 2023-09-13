import axios from 'axios'
import { useState, useEffect } from 'react'

const Puplist = () => {
  const [allPups, setAllPups] = useState([])

  useEffect(() => {
    async function fetchAllPups () {
      const data = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players')
      setAllPups(data)
    }
    fetchAllPups()
  }, [])

  return (
    <div>
      <h1>Players List</h1>
      {
        allPups.map((pup) => {
          return (
            <div key={pup.id}>
              <Link to={`/pups/${pup.id}`}>{pup.name}</Link>
            </div>
          )
        })
      }
    </div>
  )
}
export default Puplist