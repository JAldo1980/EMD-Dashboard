import React, { useState } from 'react'
import styles from './ClientDetail.module.css'

const PILLAR_CONFIG = [
  { id: 'market',    label: 'Market & Strategy',      icon: 'ti-world',       color: '#4f7ef8' },
  { id: 'relation',  label: 'Relationship & Health',  icon: 'ti-users',       color: '#3ecf8e' },
  { id: 'commercials',label: 'Commercials & Growth',  icon: 'ti-trending-up', color: '#f5a623' },
  { id: 'delivery',  label: 'Delivery & Performance', icon: 'ti-rocket',      color: '#a78bfa' },
]

const SIGNAL_CONFIG = {
  success: { color: 'var(--green)',  bg: 'var(--green-dim)',  icon: 'ti-circle-check' },
  warning: { color: 'var(--amber)',  bg: 'var(--amber-dim)',  icon: 'ti-alert-circle' },
  danger:  { color: 'var(--red)',    bg: 'var(--red-dim)',    icon: 'ti-alert-triangle' },
  info:    { color: 'var(--accent)', bg: 'var(--accent-dim)', icon: 'ti-info-circle' },
}

const PRIORITY_CONFIG = {
  critical: { color: 'var(--red)',   label: 'Critical' },
  high:     { color: 'var(--amber)', label: 'High' },
  medium:   { color: 'var(--accent)',label: 'Medium' },
}

const UPSELL_CONFIG = {
  'in-progress': { color: 'var(--accent)', label: 'In progress' },
  pipeline:      { color: 'var(--amber)',  label: 'Pipeline' },
  opportunity:   { color: 'var(--green)',  label: 'Opportunity' },
  emerging:      { color: 'var(--purple)', label: 'Emerging' },
}

function TrendArrow({ trend }) {
  if (trend === 'up')   return <span className={styles.up}><i className="ti ti-arrow-up" /></span>
  if (trend === 'down') return <span className={styles.down}><i className="ti ti-arrow-down" /></span>
  return <span className={styles.neutral}><i className="ti ti-minus" /></span>
}

function MarketPillar({ client }) {
  const m = client.market
  return (
    <div className={styles.pillarContent}>
      <div className={styles.pillarBlock}>
        <div className={styles.blockLabel}>Sector profile</div>
        {Object.entries({
          Sector:         m.sector,
          ...(m.established  ? { Established: m.established } : {}),
          ...(m.keyMarkets   ? { 'Key markets': m.keyMarkets } : {}),
          ...(m.keyProducts  ? { Products: m.keyProducts } : {}),
          ...(m.keyVerticals ? { Verticals: m.keyVerticals } : {}),
          ...(m.accreditations ? { Accreditations: m.accreditations } : {}),
          ...(m.milestone    ? { Milestone: m.milestone } : {}),
          ...(m.location     ? { Location: m.location } : {}),
          ...(m.btob         ? { 'B2B focus': m.btob } : {}),
          ...(m.complexityFlag ? { Complexity: m.complexityFlag } : {}),
        }).map(([k, v]) => (
          <div key={k} className={styles.row}>
            <span className={styles.rowLabel}>{k}</span>
            <span className={styles.rowValue}>{v}</span>
          </div>
        ))}
      </div>

      <div className={styles.pillarBlock}>
        <div className={styles.blockLabel}>Market signals</div>
        {m.signals.map((s, i) => {
          const cfg = SIGNAL_CONFIG[s.type] || SIGNAL_CONFIG.info
          return (
            <div key={i} className={styles.signal}>
              <i className={`ti ${cfg.icon}`} style={{ color: cfg.color, fontSize: 15 }} />
              <span className={styles.signalText}>{s.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function RelationPillar({ client }) {
  const r = client.relationship
  return (
    <div className={styles.pillarContent}>
      <div className={styles.pillarBlock}>
        <div className={styles.blockLabel}>Primary stakeholder</div>
        <div className={styles.contactCard}>
          <div className={styles.contactAvatar} style={{ background: client.color + '22', color: client.color }}>
            {r.contact.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className={styles.contactName}>{r.contact}</div>
            <div className={styles.contactRole}>{r.role}</div>
            <a href={`mailto:${r.email}`} className={styles.contactEmail}>
              <i className="ti ti-mail" />{r.email}
            </a>
          </div>
        </div>
        <div className={styles.row} style={{ marginTop: '0.75rem' }}>
          <span className={styles.rowLabel}>Last contact</span>
          <span className={styles.rowValue}>{r.lastMeeting}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowLabel}>Contract</span>
          <span className={styles.rowValue}>{client.commercials.contractType}</span>
        </div>
      </div>

      {r.riskAlert && (
        <div className={styles.riskAlert}>
          <i className="ti ti-alert-triangle" />
          <span>{r.riskAlert}</span>
        </div>
      )}

      <div className={styles.pillarBlock}>
        <div className={styles.blockLabel}>Health note</div>
        <p className={styles.note}>{r.healthNote}</p>
      </div>

      <div className={styles.pillarBlock}>
        <div className={styles.blockLabel}>Action items</div>
        {r.actions.map((a, i) => {
          const cfg = PRIORITY_CONFIG[a.priority] || PRIORITY_CONFIG.medium
          return (
            <div key={i} className={styles.actionItem}>
              <div className={styles.actionDot} style={{ background: cfg.color }} />
              <div className={styles.actionBody}>
                <span className={styles.actionPriority} style={{ color: cfg.color }}>{cfg.label}</span>
                <span className={styles.actionText}>{a.text}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function CommercialsPillar({ client }) {
  const c = client.commercials
  return (
    <div className={styles.pillarContent}>
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>Monthly retainer</div>
          <div className={styles.metricValue}>{c.retainer}</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>Hours / month</div>
          <div className={styles.metricValue}>
            {c.hours}h
            {c.additionalHours ? <span style={{ fontSize: 14, color: 'var(--green)', marginLeft: 4 }}>+{c.additionalHours}h</span> : null}
          </div>
        </div>
        {c.ppcSpend && (
          <div className={styles.metricCard}>
            <div className={styles.metricLabel}>PPC spend</div>
            <div className={styles.metricValue}>{c.ppcSpend}</div>
          </div>
        )}
        {c.strategyAllocation && (
          <div className={styles.metricCard}>
            <div className={styles.metricLabel}>Strategy allocation</div>
            <div className={styles.metricValue}>{c.strategyAllocation}</div>
          </div>
        )}
      </div>

      <div className={styles.pillarBlock}>
        <div className={styles.blockLabel}>Service mix</div>
        <div className={styles.chips}>
          {c.services.map(s => (
            <span key={s} className={styles.chip}>{s}</span>
          ))}
        </div>
      </div>

      {c.note && (
        <div className={styles.infoBox}>
          <i className="ti ti-info-circle" />
          <span>{c.note}</span>
        </div>
      )}

      {c.additionalNote && (
        <div className={styles.infoBox} style={{ color: 'var(--green)', borderColor: 'var(--green)' }}>
          <i className="ti ti-circle-check" />
          <span>{c.additionalNote}</span>
        </div>
      )}

      <div className={styles.pillarBlock}>
        <div className={styles.blockLabel}>Whitespace & upsell analysis</div>
        {c.upsells.length === 0
          ? <p className={styles.note}>No active upsell opportunities — focus on delivering core services first.</p>
          : c.upsells.map((u, i) => {
              const cfg = UPSELL_CONFIG[u.status] || UPSELL_CONFIG.opportunity
              return (
                <div key={i} className={styles.upsellItem}>
                  <div className={styles.upsellTop}>
                    <span className={styles.upsellName}>{u.name}</span>
                    <span className={styles.upsellBadge} style={{ color: cfg.color, borderColor: cfg.color + '44', background: cfg.color + '11' }}>{cfg.label}</span>
                  </div>
                  <div className={styles.upsellNote}>{u.note}</div>
                </div>
              )
            })
        }
      </div>
    </div>
  )
}

function DeliveryPillar({ client }) {
  const d = client.delivery
  return (
    <div className={styles.pillarContent}>
      <div className={styles.pillarBlock}>
        <div className={styles.blockLabel}>Report period: {d.reportPeriod}</div>

        {d.dataNeeded && (
          <div className={styles.riskAlert} style={{ borderColor: 'var(--amber)', background: 'var(--amber-dim)', color: 'var(--amber)' }}>
            <i className="ti ti-database" />
            <span>{d.dataNote}</span>
          </div>
        )}

        {d.auditScore && (
          <div className={styles.auditScore}>
            <div>
              <div className={styles.auditScoreLabel}>Site audit score</div>
              <div className={styles.auditScoreValue}>{d.auditScore}</div>
            </div>
            <div className={styles.auditStats}>
              <div><span className={styles.auditStatNum} style={{ color: 'var(--red)' }}>{d.criticalIssues}</span><div className={styles.auditStatLabel}>Critical</div></div>
              <div><span className={styles.auditStatNum} style={{ color: 'var(--amber)' }}>{d.highPriorityIssues}</span><div className={styles.auditStatLabel}>High priority</div></div>
              <div><span className={styles.auditStatNum} style={{ color: 'var(--accent)' }}>{d.contentGaps}</span><div className={styles.auditStatLabel}>Content gaps</div></div>
            </div>
          </div>
        )}
      </div>

      {d.seo && (
        <div className={styles.pillarBlock}>
          <div className={styles.blockLabel}>SEO performance</div>
          <div className={styles.metricsTable}>
            {d.seo.metrics.map((m, i) => (
              <div key={i} className={styles.metricRow}>
                <span className={styles.metricRowLabel}>{m.label}</span>
                <span className={styles.metricRowValue}>{m.value}</span>
                <span className={styles.metricRowDelta}>
                  <TrendArrow trend={m.trend} />
                  {m.delta}
                </span>
                {m.target && <span className={styles.metricRowTarget}>target: {m.target}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {d.ppc && d.ppc.map((account, ai) => (
        <div key={ai} className={styles.pillarBlock}>
          <div className={styles.blockLabel}>{account.account}</div>
          <div className={styles.metricsTable}>
            {account.metrics.map((m, i) => (
              <div key={i} className={styles.metricRow}>
                <span className={styles.metricRowLabel}>{m.label}</span>
                <span className={styles.metricRowValue}>{m.value}</span>
                <span className={styles.metricRowDelta}>
                  <TrendArrow trend={m.trend} />
                  {m.delta}
                </span>
                {m.note && <span className={styles.metricRowNote}>{m.note}</span>}
              </div>
            ))}
          </div>
        </div>
      ))}

      {d.kpis && d.kpis.length > 0 && (
        <div className={styles.pillarBlock}>
          <div className={styles.blockLabel}>KPI framework</div>
          {d.kpis.map((k, i) => (
            <div key={i} className={styles.kpiRow}>
              <div className={styles.kpiLabel}>{k.label}</div>
              <div className={styles.kpiMeta}>
                <span className={styles.kpiTarget}>Target: {k.target}</span>
                <span className={styles.kpiValue} style={{ color: k.value ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                  {k.value || 'Awaiting data'}
                </span>
              </div>
              {k.note && <div className={styles.kpiNote}>{k.note}</div>}
            </div>
          ))}
        </div>
      )}

      {d.topAuditFindings && (
        <div className={styles.pillarBlock}>
          <div className={styles.blockLabel}>Top audit findings</div>
          {d.topAuditFindings.map((f, i) => (
            <div key={i} className={styles.finding}>
              <i className="ti ti-point-filled" style={{ color: 'var(--red)', fontSize: 10, marginTop: 4, flexShrink: 0 }} />
              <span>{f}</span>
            </div>
          ))}
        </div>
      )}

      {d.serpHealth && (
        <div className={styles.pillarBlock}>
          <div className={styles.blockLabel}>SERP health</div>
          <div className={styles.row}>
            <span className={styles.rowLabel}>Top 10 non-branded rankings</span>
            <span className={styles.rowValue} style={{ color: 'var(--amber)' }}>{d.serpHealth.top10NonBranded}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.rowLabel}>Commercial/transactional P1</span>
            <span className={styles.rowValue} style={{ color: 'var(--red)' }}>Zero</span>
          </div>
          <div className={styles.row}>
            <span className={styles.rowLabel}>Defence keyword coverage</span>
            <span className={styles.rowValue} style={{ color: 'var(--red)' }}>{d.serpHealth.defenceCoverage}</span>
          </div>
        </div>
      )}

      {d.insight && (
        <div className={styles.infoBox}>
          <i className="ti ti-bulb" />
          <span>{d.insight}</span>
        </div>
      )}

      {d.nextSteps && (
        <div className={styles.pillarBlock}>
          <div className={styles.blockLabel}>Next steps</div>
          {d.nextSteps.map((step, i) => (
            <div key={i} className={styles.nextStep}>
              <span className={styles.nextStepNum}>{i + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ClientDetail({ client, onBack }) {
  const [activePillar, setActivePillar] = useState('market')

  const pillarComponents = {
    market:      <MarketPillar client={client} />,
    relation:    <RelationPillar client={client} />,
    commercials: <CommercialsPillar client={client} />,
    delivery:    <DeliveryPillar client={client} />,
  }

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <button className={styles.backBtn} onClick={onBack}>
              <i className="ti ti-arrow-left" /> Command Hub
            </button>
            <div className={styles.divider} />
            <div className={styles.clientAvatar} style={{ background: client.color + '22', color: client.color }}>
              {client.shortName.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className={styles.clientName}>{client.name}</div>
              <div className={styles.clientSector}>{client.sector}</div>
            </div>
          </div>
          <div className={styles.headerRight}>
            {client.dashboardUrl && (
              <a href={client.dashboardUrl} target="_blank" rel="noopener noreferrer" className={styles.extLink}>
                <i className="ti ti-external-link" /> View delivery dashboard
              </a>
            )}
            {client.website && (
              <a href={client.website} target="_blank" rel="noopener noreferrer" className={styles.extLink}>
                <i className="ti ti-world" /> Website
              </a>
            )}
          </div>
        </div>
      </header>

      <div className={styles.pillarNav}>
        <div className={styles.pillarNavInner}>
          {PILLAR_CONFIG.map(p => (
            <button
              key={p.id}
              className={`${styles.pillarTab} ${activePillar === p.id ? styles.pillarTabActive : ''}`}
              style={{ '--pillar-color': p.color }}
              onClick={() => setActivePillar(p.id)}
            >
              <i className={`ti ${p.icon}`} />
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.pillarPanel}>
          {pillarComponents[activePillar]}
        </div>
      </main>
    </div>
  )
}
