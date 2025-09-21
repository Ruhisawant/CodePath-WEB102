import Calendar from './components/Calendar'
import './App.css'

const App = () => {

  return (
    <div className='App'>
      <h1>Itinerary for 7 Days in Chicago 🏙</h1>
      <h2>Welcome to Chicago! You've got a week full of food and fun.</h2>
      <Calendar />
    </div>
  )
}

export default App