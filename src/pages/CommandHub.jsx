import React from 'react'
import styles from './CommandHub.module.css'

const RISK_CONFIG = {
  high:   { color: 'var(--red)',   bg: 'var(--red-dim)',   icon: 'ti-alert-triangle' },
  medium: { color: 'var(--amber)', bg: 'var(--amber-dim)', icon: 'ti-alert-circle' },
  low:    { color: 'var(--green)', bg: 'var(--green-dim)', icon: 'ti-circle-check' },
}

const SERVICE_COLORS = {
  SEO:         '#4f7ef8',
  PPC:         '#a78bfa',
  'Paid Media':'#a78bfa',
  Social:      '#3ecf8e',
  Strategy:    '#f5a623',
  PR:          '#f04040',
}

function today() {
  return new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

function totalRetainer(clients) {
  const known = clients
    .map(c => c.commercials.retainer)
    .filter(r => r && r !== 'TBC')
    .map(r => parseInt(r.replace(/[^0-9]/g, '')))
    .reduce((a, b) => a + b, 0)
  return `£${known.toLocaleString()}+`
}

function totalHours(clients) {
  return clients.reduce((sum, c) => {
    const base = c.commercials.hours || 0
    const extra = c.commercials.additionalHours || 0
    return sum + base + extra
  }, 0)
}

export default function CommandHub({ clients, onSelectClient, theme, onToggleTheme }) {
  const atRisk = clients.filter(c => c.riskLevel === 'high').length
  const upsells = clients.reduce((sum, c) => sum + (c.commercials.upsells?.filter(u => u.status === 'pipeline' || u.status === 'in-progress').length || 0), 0)

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.brand}>
            <img src="/logo.svg" alt="Extramile Digital" className={styles.brandMark} />
            <div>
              <div className={styles.brandName}>KAM Command Hub</div>
              <div className={styles.brandSub}>Extramile Digital — Key Account Manager</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className={styles.headerDate}>{today()}</div>
            <button onClick={onToggleTheme} style={{ color: 'var(--text-muted)', fontSize: 18, padding: '4px 6px', borderRadius: 'var(--radius-sm)', transition: 'color 0.15s, background 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'var(--bg-card)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'none' }}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              <i className={`ti ${theme === 'dark' ? 'ti-sun' : 'ti-moon'}`} />
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.summarySection}>
          <h1 className={styles.sectionTitle}>Portfolio Overview</h1>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCard}>
              <div className={styles.summaryLabel}>Monthly retainer</div>
              <div className={styles.summaryValue}>{totalRetainer(clients)}</div>
              <div className={styles.summarySub}>4 active clients · Certus TBC</div>
            </div>
            <div className={styles.summaryCard}>
              <div className={styles.summaryLabel}>Total hours contracted</div>
              <div className={styles.summaryValue}>{totalHours(clients)}h</div>
              <div className={styles.summarySub}>inc. Northpoint +8h PR upsell</div>
            </div>
            <div className={styles.summaryCard} style={{ borderColor: atRisk > 0 ? 'var(--red)' : undefined }}>
              <div className={styles.summaryLabel}>Accounts at risk</div>
              <div className={styles.summaryValue} style={{ color: atRisk > 0 ? 'var(--red)' : 'var(--green)' }}>{atRisk}</div>
              <div className={styles.summarySub}>{atRisk > 0 ? 'Membracon — trust risk' : 'All accounts stable'}</div>
            </div>
            <div className={styles.summaryCard}>
              <div className={styles.summaryLabel}>Upsell pipeline</div>
              <div className={styles.summaryValue} style={{ color: 'var(--amber)' }}>{upsells}</div>
              <div className={styles.summarySub}>Active opportunities</div>
            </div>
          </div>
        </section>

        <section className={styles.clientsSection}>
          <h2 className={styles.sectionTitle}>Client Accounts</h2>
          <div className={styles.clientGrid}>
            {clients.map(client => {
              const risk = RISK_CONFIG[client.riskLevel]
              return (
                <button
                  key={client.id}
                  className={styles.clientCard}
                  onClick={() => onSelectClient(client.id)}
                  style={{ '--client-color': client.color }}
                >
                  <div className={styles.clientCardTop}>
                    <div className={styles.clientAvatar} style={{ background: client.color + '22', color: client.color }}>
                      {client.shortName.slice(0, 2).toUpperCase()}
                    </div>
                    <div className={styles.clientMeta}>
                      <div className={styles.clientName}>{client.name}</div>
                      <div className={styles.clientSector}>{client.sector}</div>
                    </div>
                    <div className={styles.riskBadge} style={{ color: risk.color, background: risk.bg }}>
                      <i className={`ti ${risk.icon}`} />
                      {client.riskLabel}
                    </div>
                  </div>

                  <div className={styles.clientStats}>
                    <div className={styles.stat}>
                      <div className={styles.statLabel}>Retainer</div>
                      <div className={styles.statValue}>{client.commercials.retainer}</div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.statLabel}>Hours</div>
                      <div className={styles.statValue}>
                        {client.commercials.hours}h
                        {client.commercials.additionalHours ? <span className={styles.statExtra}> +{client.commercials.additionalHours}h</span> : null}
                      </div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.statLabel}>Contract</div>
                      <div className={styles.statValue}>{client.commercials.contractType}</div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.statLabel}>Last contact</div>
                      <div className={styles.statValue}>{client.relationship.lastMeeting}</div>
                    </div>
                  </div>

                  <div className={styles.serviceChips}>
                    {client.commercials.services.map(s => (
                      <span key={s} className={styles.chip} style={{ background: (SERVICE_COLORS[s] || '#888') + '22', color: SERVICE_COLORS[s] || '#888' }}>{s}</span>
                    ))}
                  </div>

                  <div className={styles.clientContact}>
                    <i className="ti ti-user-circle" />
                    <span>{client.relationship.contact} · {client.relationship.role}</span>
                  </div>

                  {client.commercials.upsells?.filter(u => u.status === 'pipeline' || u.status === 'in-progress').length > 0 && (
                    <div className={styles.upsellHint}>
                      <i className="ti ti-trending-up" />
                      {client.commercials.upsells.filter(u => u.status === 'pipeline' || u.status === 'in-progress').length} upsell opportunity{client.commercials.upsells.filter(u => u.status === 'pipeline' || u.status === 'in-progress').length > 1 ? 'ies' : 'y'}
                    </div>
                  )}

                  <div className={styles.clientCta}>
                    Open account <i className="ti ti-arrow-right" />
                  </div>
                </button>
              )
            })}
          </div>
        </section>

        <section className={styles.alertsSection}>
          <h2 className={styles.sectionTitle}>Priority Actions This Week</h2>
          <div className={styles.alertsList}>
            {clients.flatMap(c =>
              c.relationship.actions
                .filter(a => a.priority === 'critical' || a.priority === 'high')
                .map((a, i) => ({
                  ...a,
                  client: c.name,
                  clientColor: c.color,
                  clientId: c.id,
                  key: `${c.id}-${i}`
                }))
            ).map(a => (
              <div key={a.key} className={styles.alertItem}>
                <div className={styles.alertDot} style={{
                  background: a.priority === 'critical' ? 'var(--red)' : 'var(--amber)'
                }} />
                <div className={styles.alertBody}>
                  <span className={styles.alertClient} style={{ color: a.clientColor }}>{a.client}</span>
                  <span className={styles.alertText}>{a.text}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
