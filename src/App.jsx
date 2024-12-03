import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [thoughts, setThoughts] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the data to be sent
    const userData = {
      name: 'Lia Kostas',
      content: {
        name: name,
        email: email,
      },
    };

    try {
      const response = await fetch('https://logtodatabase-rgzyvy3rca-uc.a.run.app', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Success');
    } catch (error) {
      alert('Error');
    }
  };

  return (
    <>
            <nav className="nav-bar">
        <a href="index.html" className="nav-logo">Elixir</a>
        <div className="nav-links">
            <a href="index.html">Home</a>
            <a href="waitlist.html">Be The First</a>
        </div>
    </nav>
    <div className="container">
        <div className="text-content">
            <h1>Welcome to Elixir</h1>
            <p>Experience the best of NYC nightlife.</p>
            <p>Be the first to join a community of partygoers. Stay updated on the best events and meet the best people along the way!</p>
            <form id="signupForm" className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Your Name" 
                        required 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Your Email" 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <button type="submit" className="cta-button">Join the Waitlist</button>
            </form>
        </div>
        <img src="src/assets/hero-image.jpg" alt="Vibrant nightclub scene" className="hero-image" />
    </div>
    </>
  )
}

export default App
