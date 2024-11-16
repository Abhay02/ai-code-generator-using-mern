import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import CodePage from "./pages/CodePage"
import SingleCodeView from "./pages/SingleCodeView"
import Header from "./components/Header"

const App = () => {
  return (
    <div>
      <Header />
      <div className="px-24">
      <Routes>
         <Route path="/" element={<Dashboard />}/>
         <Route path="/code" element={<CodePage />}/>
         <Route path="/code/:id" element={<SingleCodeView />}/>
      </Routes>
      </div>
    </div>
  )
}

export default App