import {Link} from 'react-router-dom'

const Header = () => {
  return (
   <header>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-2 left">
                <Link to='/' >Random.user</Link>
            </div>
            <div className="col-lg-10 right text-right">
                <Link to='/'>Home</Link>
                <Link to='/add'>Add User</Link>
            </div>
        </div>
    </div>
   </header>
  )
}

export default Header