import { useState, useEffect, useParams } from 'react'
import axios from 'axios'

const SinglePup = () => {
  const {id} = useParams()
  const [pup, setPup] = useState(null)

  useEffect(() => {
    async function fetchPup(){
      const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players${id}')
      setPup(data)
    }
    fetchPup()
  }, [])
  return (
    <div>
      <h2>{pup && pup.name}</h2>
      <h3>{pup && pup.breed}</h3>
    </div>
  )
}

export default SinglePup