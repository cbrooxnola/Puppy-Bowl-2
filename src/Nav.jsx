import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/pups'>Player List</Link>
    </div>
  )
}
export default Nav