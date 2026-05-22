import React, { useState } from 'react'
import clients from './data/clients.json'
import CommandHub from './pages/CommandHub.jsx'
import ClientDetail from './pages/ClientDetail.jsx'

export default function App() {
  const [activeClient, setActiveClient] = useState(null)

  return activeClient
    ? <ClientDetail
        client={clients.find(c => c.id === activeClient)}
        onBack={() => setActiveClient(null)}
      />
    : <CommandHub
        clients={clients}
        onSelectClient={setActiveClient}
      />
}
