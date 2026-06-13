import React from 'react'
import { Car, UserCheck, Users, ShieldCheck } from 'lucide-react'

export default function DashboardScreen() {
  // TODO: Fetch real-time metrics from GET /api/v1/admin/dashboard-stats
  const stats = [
    { label: 'Active Trips Now', value: '42', change: '+12%', icon: Car, color: '#1E3A8A', bg: '#F1F5F9', changeColor: '#15803D', changeBg: '#DCFCE7' },
    { label: 'Drivers Online', value: '128', change: '+5%', icon: UserCheck, color: '#1E3A8A', bg: '#F1F5F9', changeColor: '#15803D', changeBg: '#DCFCE7' },
    { label: 'Students Registered', value: '4,892', change: '+24%', icon: Users, color: '#1E3A8A', bg: '#F1F5F9', changeColor: '#15803D', changeBg: '#DCFCE7' },
    { label: 'Pending Verification', value: '85', change: 'Action Req.', icon: ShieldCheck, color: '#991B1B', bg: '#FEE2E2', changeColor: '#991B1B', changeBg: '#FEE2E2' },
  ]

  // TODO: Fetch driver roster from GET /api/v1/admin/drivers/leaderboard
  const topDrivers = [
    { name: 'Adrian Morales', rating: '4.98', trips: 142, initials: 'AM' },
    { name: 'Sarah Jenkins', rating: '4.95', trips: 138, initials: 'SJ' },
    { name: 'Leo Chang', rating: '4.89', trips: 125, initials: 'LC' },
  ]

  // TODO: Connect WebSockets to stream log array objects dynamically
  const recentActivity = [
    { title: 'New Student Signup', desc: 'Elena Rossi verified her email.', time: '2 MINS AGO', circleColor: '#3B82F6' },
    { title: 'Trip Completed', desc: 'Driver #402 finished route 14B.', time: '15 MINS AGO', circleColor: '#22C55E' },
    { title: 'Dispute Flagged', desc: 'Student A290 reported a delay.', time: '42 MINS AGO', circleColor: '#EF4444' },
  ]

  // TODO: Fetch chart data array from GET /api/v1/admin/analytics/trip-volume
  const chartData = [35, 45, 55, 90, 75, 30, 20]

  return (
    <div style={styles.container}>
      
      {/* 1. TOP METRICS GRID ROW */}
      <div style={styles.metricsGrid}>
        {stats.map((card, idx) => {
          const IconComponent = card.icon
          return (
            <div key={idx} style={styles.statCard}>
              <div style={styles.cardHeader}>
                <div style={{ ...styles.iconWrapper, backgroundColor: card.bg }}>
                  <IconComponent size={16} strokeWidth={2.5} color={card.color} />
                </div>
                <span style={{ ...styles.badge, color: card.changeColor, backgroundColor: card.changeBg }}>
                  {card.change}
                </span>
              </div>
              <div style={styles.cardFooter}>
                <p style={styles.cardLabel}>{card.label}</p>
                <p style={styles.cardValue}>{card.value}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* 2. MIDDLE AREA: MAP AND RECENT ACTIVITY TIMELINE */}
      <div style={styles.middleSection}>
        <div style={styles.mapContainer}>
          <div style={styles.liveLabel}>
            <span style={styles.pingDot} /> LIVE CAMPUS ACTIVITY
          </div>
          
          {/* TODO: Initialize MapboxGL/GoogleMaps component centered on Legon campus and stream live coordinate arrays */}
          <div style={styles.mapVisualFrame}>
            <div style={styles.mapGridLineHorizontal} />
            <div style={styles.mapGridLineVertical} />
            
            <div style={{ ...styles.liveDriverNode, top: '35%', left: '25%', backgroundColor: '#22C55E' }} />
            <div style={{ ...styles.liveDriverNode, top: '60%', left: '70%', backgroundColor: '#2563EB' }} />
            <div style={{ ...styles.liveDriverNode, top: '20%', left: '55%', backgroundColor: '#EF4444' }} />
          </div>
          
          <div style={styles.mapLegendBox}>
            <div style={styles.legendItem}>
              <span style={{ ...styles.dot, backgroundColor: '#22C55E' }} /> Available Drivers
            </div>
            <div style={styles.legendItem}>
              <span style={{ ...styles.dot, backgroundColor: '#2563EB' }} /> Trips In Progress
            </div>
            <div style={styles.legendItem}>
              <span style={{ ...styles.dot, backgroundColor: '#EF4444' }} /> High Demand Zones
            </div>
          </div>
        </div>

        {/* Flush-Left Recent Activity Container */}
        <div style={styles.activityPanel}>
          <div style={styles.panelHeader}>
            <h3 style={styles.panelTitle}>Recent Activity</h3>
            <span style={styles.viewAllBtn}>VIEW ALL</span>
          </div>
          <div style={styles.activityList}>
            {recentActivity.map((act, i) => (
              <div key={i} style={styles.activityItem}>
                <span style={{ ...styles.statusDot, backgroundColor: act.circleColor }} />
                <div style={styles.itemContentBlock}>
                  <p style={styles.itemTitle}>{act.title}</p>
                  <span style={styles.itemTime}>{act.time}</span>
                  <p style={styles.itemDesc}>{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM AREA: LEADERBOARD AND TRIP VOLUMES */}
      <div style={styles.bottomSection}>
        {/* Top Drivers Table Card */}
        <div style={styles.tableCard}>
          <div style={styles.panelHeader}>
            <h3 style={styles.panelTitle}>Top Drivers This Week</h3>
            <span style={styles.weekBadge}>WEEK 42</span>
          </div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={{ ...styles.th, textAlign: 'left' }}>DRIVER</th>
                <th style={{ ...styles.th, textAlign: 'center' }}>RATING</th>
                <th style={{ ...styles.th, textAlign: 'right' }}>TOTAL TRIPS</th>
              </tr>
            </thead>
            <tbody>
              {topDrivers.map((drv, i) => (
                <tr key={i} style={styles.tableRow}>
                  <td style={styles.tdNameCell}>
                    <div style={styles.tableAvatarMock}>{drv.initials}</div>
                    <span style={styles.driverNameText}>{drv.name}</span>
                  </td>
                  <td style={styles.tdRatingCell}>★ {drv.rating}</td>
                  <td style={styles.tdTripsCell}>{drv.trips}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Trip Volume Column Chart */}
        <div style={styles.chartCard}>
          <div style={styles.panelHeader}>
            <h3 style={styles.panelTitle}>Trip Volume</h3>
            <span style={styles.weekBadge}>LAST 7 DAYS</span>
          </div>
          <div style={styles.chartTrack}>
            {chartData.map((h, idx) => (
              <div key={idx} style={styles.chartColumnWrapper}>
                <div style={{ ...styles.barColumn, height: `${h}%`, backgroundColor: idx === 3 ? '#1E3A8A' : '#DBEAFE' }} />
                <span style={styles.barLabel}>{['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'][idx]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

// ── CLEAN ARRANGED STYLE SHEET SHEET ─────────────────────────────────────────
const styles = {
  /* Layout Grid Controllers */
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    fontFamily: '"Inter", sans-serif',
    width: '100%',
    boxSizing: 'border-box',
  },
  metricsGrid: {
    display: 'flex',
    gap: '20px',
    flexShrink: 0,
  },
  middleSection: {
    display: 'flex',
    gap: '20px',
    minHeight: '340px',
  },
  bottomSection: {
    display: 'flex',
    gap: '24px',
    minHeight: '240px',
  },

  /* Stat Metric Components */
  statCard: {
    backgroundColor: '#ffffff',
    padding: '16px 20px',
    borderRadius: '16px',
    border: '1px solid #E2E8F0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '120px',
    flex: 1,
    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    width: '32px',
    height: '32px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    fontSize: '11px',
    fontWeight: 700,
    padding: '3px 8px',
    borderRadius: '6px',
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  cardLabel: {
    fontSize: '12px',
    fontWeight: 700,
    color: '#94A3B8',
    margin: 0,
  },
  cardValue: {
    fontSize: '26px',
    fontWeight: 800,
    color: '#0F172A',
    margin: 0,
    letterSpacing: '-0.5px',
  },

  /* Map Elements */
  mapContainer: {
    backgroundColor: '#0B1329',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 2,
    position: 'relative',
    border: '1px solid #1E293B',
    overflow: 'hidden',
  },
  mapVisualFrame: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  mapGridLineHorizontal: {
    position: 'absolute',
    top: '50%',
    left: 0,
    width: '100%',
    height: '1px',
    borderTop: '1px dashed rgba(30, 41, 59, 0.4)',
  },
  mapGridLineVertical: {
    position: 'absolute',
    left: '50%',
    top: 0,
    width: '1px',
    height: '100%',
    borderLeft: '1px dashed rgba(30, 41, 59, 0.4)',
  },
  liveDriverNode: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    boxShadow: '0 0 12px currentColor',
  },
  liveLabel: {
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    border: '1px solid #1E293B',
    color: '#ffffff',
    fontSize: '11px',
    fontWeight: 800,
    padding: '6px 12px',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: 'max-content',
    zIndex: 2,
  },
  pingDot: {
    width: '6px',
    height: '6px',
    backgroundColor: '#22C55E',
    borderRadius: '50%',
  },
  mapPlaceholderText: {
    color: '#242F41',
    textAlign: 'center',
    fontSize: '12px',
    fontFamily: 'monospace',
    margin: '30px 0',
  },
  mapLegendBox: {
    backgroundColor: 'rgba(11, 19, 41, 0.95)',
    border: '1px solid #1E293B',
    padding: '12px',
    borderRadius: '12px',
    width: '170px',
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    zIndex: 2,
  },
  legendItem: {
    fontSize: '11px',
    color: '#94A3B8',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
  },

  /* Activity Feed Components */
  activityPanel: {
    backgroundColor: '#ffffff',
    border: '1px solid #E2E8F0',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
  },
  panelHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  panelTitle: {
    fontSize: '13px',
    fontWeight: 800,
    color: '#1E3A8A',
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '0.3px',
  },
  viewAllBtn: {
    fontSize: '11px',
    fontWeight: 700,
    color: '#2563EB',
    cursor: 'pointer',
  },
  activityList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  activityItem: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  statusDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    marginTop: '6px',
    flexShrink: 0,
  },
  itemContentBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2px',
    width: '100%',
  },
  itemTitle: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#1E293B',
    margin: 0,
  },
  itemTime: {
    fontSize: '10px',
    fontWeight: 700,
    color: '#94A3B8',
  },
  itemDesc: {
    fontSize: '12px',
    color: '#64748B',
    margin: '2px 0 0 0',
    lineHeight: '1.4',
  },

  /* Leaderboard Table Components */
  tableCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #E2E8F0',
    borderRadius: '20px',
    padding: '20px',
    flex: 3,
    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
  },
  weekBadge: {
    fontSize: '10px',
    fontWeight: 800,
    backgroundColor: '#F1F5F9',
    color: '#64748B',
    padding: '3px 8px',
    borderRadius: '6px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    paddingBottom: '12px',
    fontSize: '11px',
    fontWeight: 700,
    color: '#94A3B8',
    borderBottom: '1px solid #F1F5F9',
    letterSpacing: '0.5px',
  },
  tableRow: {
    borderBottom: '1px solid #F1F5F9',
  },
  td: {
    padding: '12px 0',
    fontSize: '13px',
    color: '#334155',
  },
  tdNameCell: {
    padding: '12px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  tdRatingCell: {
    padding: '12px 0',
    color: '#1E3A8A',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: '13px',
  },
  tdTripsCell: {
    padding: '12px 0',
    fontWeight: '800',
    textAlign: 'right',
    color: '#1E293B',
    fontSize: '13px',
  },
  tableAvatarMock: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: '#F1F5F9',
    color: '#475569',
    fontSize: '11px',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #E2E8F0',
  },
  driverNameText: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#1E293B',
  },

  /* Chart Volume Components */
  chartCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #E2E8F0',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 2,
    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
  },
  chartTrack: {
    height: '140px',
    display: 'flex',
    alignItems: 'flex-end',
    gap: '12px',
    paddingTop: '12px',
  },
  chartColumnWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    height: '100%',
    justifyContent: 'flex-end',
  },
  barColumn: {
    width: '100%',
    borderRadius: '4px 4px 0 0',
  },
  barLabel: {
    fontSize: '10px',
    fontWeight: 700,
    color: '#94A3B8',
  },
}