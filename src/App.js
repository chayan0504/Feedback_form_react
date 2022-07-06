import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import FeedbackList from "./components/FeedbackList"
// import FeedbackData from './data/FeedbackData'
import Header from './components/Header'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
// import Post from './pages/Post'
import { FeedbackProvider } from './context/FeedbackContext'


function App(){

  // const [feedback,setfeedback] = useState(FeedbackData)
  
  return(
    <FeedbackProvider>
    <Router>
    <Header/>
    <div className="container">
      <Routes>
        <Route exact path='/'
          element={
            <>
            <FeedbackForm />
            <FeedbackStats   />
            <FeedbackList />
            <AboutIconLink/>
            </>
          }>
        </Route>
      <Route path='/about' element={<AboutPage/>}/>
      {/* <Route path='/post' element={<Post/>}/> */}
      </Routes>
      
    </div>
    </Router>
    </FeedbackProvider>
  )
  
}

export default App






















