import { Helmet } from 'react-helmet-async'
import Rooms from '../../components/Rooms/Rooms'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      {/* Rooms section */}
      <Rooms />
    </div>
  )
}

export default Home
