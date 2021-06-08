import { useState } from 'react'

import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'

function App() {
  // Use initialEmails for state
  console.log(initialEmails)
  const [emails, setEmails] = useState(initialEmails)

  const toggleRead = email => {
    setEmails(emails.map((thingToChange) => {
      if(email.id === thingToChange.id){
        return {...email, read: !email.read}
      } else {
        return thingToChange
      }
    }))
  }

  const toggleStar = email => {
    setEmails(emails.map((thingToCheck) => {
      if(email.id === thingToCheck.id) {
        return {...email, starred: !email.starred}
      } else {
        return thingToCheck
      }
    }))
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
            {emails.map(email => (
            <li className="email">
              <input 
                onChange={() => toggleRead(email)} 
                type="checkbox" 
                checked={email.read} />
              <input 
                onChange={() => toggleStar(email)} 
                type="checkbox" 
                className="star-checkbox" 
                checked={email.starred} />
              <span>{email.sender}</span>
              <span>{email.title}</span>
            </li>
            ))}
          </ul>
      </main>
    </div>
  )
}

export default App
