import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/navbar.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/loginform/login.jsx'
import Options from './components/optionsform/options.jsx'
import Footer from './components/footer/footer.jsx'
import Leftpanel from './components/leftpanel/leftpanel.jsx'

//import './site.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <header>
            <Navbar />
        </header>
        <main>
            <aside className="main__leftPanel">
                <Leftpanel />
            </aside>
            <section className="main__top-feed">
                <App />
            </section>
        </main>
        <footer>
            <Footer />
        </footer>
        <Login />
        <Options />
  </React.StrictMode>,
)
