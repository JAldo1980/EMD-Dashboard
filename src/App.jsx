import React, { useState, useEffect } from 'react'
import clients from './data/clients.json'
import CommandHub from './pages/CommandHub.jsx'
import ClientDetail from './pages/ClientDetail.jsx'

export default function App() {
  const [activeClient, setActiveClient] = useState(null)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return activeClient
    ? <ClientDetail
        client={clients.find(c => c.id === activeClient)}
        onBack={() => setActiveClient(null)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    : <CommandHub
        clients={clients}
        onSelectClient={setActiveClient}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
}
