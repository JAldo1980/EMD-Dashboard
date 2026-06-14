import React, { useState, useEffect } from 'react'
import clients from './data/clients.json'
import CommandHub from './pages/CommandHub.jsx'
import ClientDetail from './pages/ClientDetail.jsx'
import EMDDashboard from './pages/EMDDashboard.jsx'

export default function App() {
  const [activeClient, setActiveClient] = useState(null)
  const [view, setView] = useState(() => localStorage.getItem('view') || 'emd')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('view', view)
  }, [view])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  if (view === 'emd') return (
    <div>
      <div style={{
        position: 'fixed', bottom: 20, right: 20, zIndex: 9999,
        display: 'flex', gap: 8
      }}>
        <button
          onClick={() => setView('kam')}
          style={{
            background: '#1a1a1d', border: '1px solid rgba(255,255,255,0.1)',
            color: '#888', fontSize: 11, padding: '6px 14px', borderRadius: 8,
            cursor: 'pointer', fontFamily: 'inherit'
          }}
        >
          Switch to KAM Hub →
        </button>
      </div>
      <EMDDashboard />
    </div>
  )

  return (
    <div>
      <div style={{
        position: 'fixed', bottom: 20, right: 20, zIndex: 9999,
      }}>
        <button
          onClick={() => setView('emd')}
          style={{
            background: '#1a1a1d', border: '1px solid rgba(255,255,255,0.1)',
            color: '#888', fontSize: 11, padding: '6px 14px', borderRadius: 8,
            cursor: 'pointer', fontFamily: 'inherit'
          }}
        >
          Switch to EMD Dashboard →
        </button>
      </div>
      {activeClient
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
    </div>
  )
}
