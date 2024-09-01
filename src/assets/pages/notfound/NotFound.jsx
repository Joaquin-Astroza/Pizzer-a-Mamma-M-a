import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1>OOOPS</h1>
      <p>Page not found</p>
      <Link to="/">Go back</Link>
    </div>
  )
}
