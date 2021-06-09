import { useState } from 'react'

import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'

function App() {
  // Use initialEmails for state
  console.log(initialEmails)
  const [emails, setEmails] = useState(initialEmails)
  const [hideReadEmails, setHideReadEmails] = useState(false)

  const unreadCount = emails.filter(email => !email.read).length
  const starredCount = emails.filter(email => email.starred).length
  const emailsToRender = hideReadEmails ? emails.filter(email => !email.read) : emails


  const toggleRead = clickedEmail => {
    setEmails(emails.map(email => clickedEmail.id === email.id 
        ? {...email, read: !email.read} 
        : email
    ))
  }

  const toggleStar = clickedEmail => {
    setEmails(emails.map(email => email.id === clickedEmail.id 
        ? {...email, starred: !email.starred}
        : email
    ))
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
            <span className="count">{unreadCount}</span>
          </li>

          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">{starredCount}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideReadEmails}
              onChange={(e) => {setHideReadEmails(e.target.checked)}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emailsToRender.map(email => (
          <li key={email.id} className={`email ${email.read ? 'read' : 'unread'}`}>
            <input type="checkbox" 
              onChange={() => toggleRead(email)} 
              checked={email.read} />
            <input type="checkbox" 
              onChange={() => toggleStar(email)} 
              checked={email.starred} 
              className="star-checkbox" />
            <span>{email.sender}</span>
            <span className="title">{email.title}</span>
          </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
