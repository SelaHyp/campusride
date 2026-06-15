import React, { useState, useEffect } from 'react'
import { 
  Users, 
  CheckCircle, 
  Clock, 
  AlertTriangle 
} from 'lucide-react'

export default function TripsMonitoringScreen() {
  // Analytical Metrics State Framework
  const [metrics, setMetrics] = useState([
    { id: 1, label: 'Active Trips', value: '27', change: '+ 2.3', icon: <Users size={18} color="#1E3A8A" />, bg: '#DBEAFE', color: '#16A34A' },
    { id: 2, label: 'Completed Today', value: '148', change: '+ 148', icon: <CheckCircle size={18} color="#2563EB" />, bg: '#DBEAFE', color: '#16A34A' },
    { id: 3, label: 'Delayed Trips', value: '3', change: '+ 23', icon: <Clock size={18} color="#CA8A04" />, bg: '#FEF9C3', color: '#CA8A04' },
    { id: 4, label: 'Flagged Trips', value: '1', change: '+ 1', icon: <AlertTriangle size={18} color="#DC2626" />, bg: '#FEE2E2', color: '#DC2626' }
  ])

  // Active Dispatch Ride List Panel State Framework
  const [activeTrips, setActiveTrips] = useState([
    {
      id: 'TRIP-904',
      studentName: 'Julian Vance',
      driverName: 'Emmanuel Kofi Boateng',
      route: 'Main Gate Express',
      status: 'En Route',
      statusBg: '#DBEAFE',
      statusColor: '#1E40AF'
    },
    {
      id: 'TRIP-905',
      studentName: 'Sherman Name',
      driverName: 'Kwame Evans Mensah',
      route: 'West Transit Loop',
      status: 'At Pickup',
      statusBg: '#FEF9C3',
      statusColor: '#854D0E'
    },
    {
      id: 'TRIP-906',
      studentName: 'Julian Vance',
      driverName: 'Samuel Yaw Addo',
      route: 'East Housing Ride',
      status: 'In Progress',
      statusBg: '#FEE2E2',
      statusColor: '#991B1B'
    }
  ])

  // Route Pathway Density State Framework
  const [routePerformance, setRoutePerformance] = useState([
    { name: 'Main Gate Express', activeDrivers: 12, avgEta: '8 mins', load: 'Optimal', loadColor: '#16A34A' },
    { name: 'West Transit Loop', activeDrivers: 9, avgEta: '14 mins', load: 'Heavy', loadColor: '#CA8A04' },
    { name: 'East Housing Ride', activeDrivers: 6, avgEta: '5 mins', load: 'Light', loadColor: '#2563EB' }
  ])

  // Live Auditable Chronological Logs State Framework
  const [eventsLog, setEventsLog] = useState([
    { id: 1, title: 'Trip started', desc: 'Trip started at the station.', time: '12:31 PM', color: '#2563EB' },
    { id: 2, title: 'Trip completed', desc: 'Driver Housing Ride arriving.', time: '12:32 PM', color: '#16A34A' },
    { id: 3, title: 'Delay flagged', desc: 'Delay flagged tracking.', time: '12:53 PM', color: '#DC2626' },
    { id: 4, title: 'Driver arrived', desc: 'Driver arrived at the platform.', time: '12:30 PM', color: '#2563EB' },
    { id: 5, title: 'Trip completed', desc: 'East completed at trip.', time: '12:38 PM', color: '#16A34A' },
    { id: 6, title: 'Trip started', desc: 'Driver gate arriving.', time: '12:34 PM', color: '#94A3B8' }
  ])

  useEffect(() => {
    // 💡 BACKEND TODO:
    // 1. Fetch upper row data aggregates via HTTP GET request to `/api/v1/admin/trips/metrics-summary`
    // 2. Fetch live tracking panel vectors via HTTP GET request to `/api/v1/admin/trips/active-dispatches`
    // 3. Fetch general route load statistics via HTTP GET request to `/api/v1/admin/routes/performance-matrix`
    // 4. Initialize WebSocket channel instance (`stream:trips-live-updates`) to handle incoming payload mutations on `activeTrips` and state changes.
    // 5. Connect WebSocket channel instance (`stream:trips-audit-events`) to unshift real-time logs into the `eventsLog` list layout array automatically.
  }, [])

  return (
    <div style={tmStyles.workspace}>
      <div style={tmStyles.headerContextSegment}>
        <h2 style={tmStyles.viewTitleText}>Trips Monitoring</h2>
        <p style={tmStyles.viewSubtitleText}>Real-time monitoring of all campus transportation activity</p>
      </div>

      {/* TOP ROW STATS GRID METRICS */}
      <div style={tmStyles.statsRowGrid}>
        {metrics.map((m) => (
          <div key={m.id} style={tmStyles.statCard}>
            <div style={tmStyles.statBodyBlock}>
              <span style={tmStyles.statLabelText}>{m.label}</span>
              <div style={tmStyles.statNumberGroup}>
                <span style={tmStyles.statNumberText}>{m.value}</span>
                <span style={{ ...tmStyles.statTrendText, color: m.color }}>{m.change}</span>
              </div>
            </div>
            <div style={{ ...tmStyles.statIconBadge, backgroundColor: m.bg }}>{m.icon}</div>
          </div>
        ))}
      </div>

      {/* MAIN TWO-COLUMN ROW INTERACTIVE AREA */}
      <div style={tmStyles.mainLayoutColumnsRow}>
        
        {/* ROUTE PERFORMANCE TRACKER MATRIX GRID */}
        <div style={tmStyles.routePerformanceCard}>
          <h3 style={tmStyles.containerBlockTitle}>Active Route Performance</h3>
          <div style={tmStyles.performanceGridTable}>
            <div style={tmStyles.tableHeaderRow}>
              <span style={tmStyles.tableHeaderLabel}>ROUTE PATHWAY</span>
              <span style={tmStyles.tableHeaderLabel}>ACTIVE DRIVERS</span>
              <span style={tmStyles.tableHeaderLabel}>AVG WAITING ETA</span>
              <span style={{ ...tmStyles.tableHeaderLabel, textAlign: 'right' }}>COMMUTE LOAD</span>
            </div>
            {routePerformance.map((route, index) => (
              <div key={index} style={tmStyles.tableDataDataRow}>
                <span style={tmStyles.routeNameText}>{route.name}</span>
                <span style={tmStyles.routeMetricsText}>{route.activeDrivers} drivers live</span>
                <span style={tmStyles.routeMetricsText}>{route.avgEta}</span>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <span style={{ ...tmStyles.loadStatusPill, backgroundColor: route.loadColor }}>
                    {route.load}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SHEET SIDEBAR: ACTIVE TRIP STACK PANEL LIST */}
        <div style={tmStyles.activeTripsPanelCard}>
          <h3 style={tmStyles.containerBlockTitle}>Active Trips Panel</h3>
          <div style={tmStyles.tripsScrollContainer}>
            {activeTrips.map((t, idx) => (
              <div key={idx} style={tmStyles.tripListItemRow}>
                <div style={tmStyles.tripMetaInfoBlock}>
                  <div style={tmStyles.tripGridRow}>
                    <span style={tmStyles.metaColumnHeadLabel}>TRIP ID:</span>
                    <span style={tmStyles.metaColumnHeadLabel}>STUDENT NAME</span>
                  </div>
                  <div style={tmStyles.tripGridRow}>
                    <span style={tmStyles.tripIdentifierText}>{t.id}</span>
                    <span style={tmStyles.entityNameDataText}>{t.studentName}</span>
                  </div>
                  <div style={{ ...tmStyles.tripGridRow, marginTop: '8px' }}>
                    <span style={tmStyles.metaSubTextLabel}>Driver Name</span>
                    <span style={tmStyles.metaSubTextLabel}>ROUTE</span>
                  </div>
                  <div style={tmStyles.tripGridRow}>
                    <span style={tmStyles.entityNameDataText}>{t.driverName}</span>
                    <span style={tmStyles.routePathDesignationText}>{t.route}</span>
                  </div>
                </div>
                <div style={tmStyles.tripStatusBadgeContainerColumn}>
                  <span style={tmStyles.metaColumnHeadLabel}>STATUS</span>
                  <span style={{ ...tmStyles.liveStatusBadgeMarkup, backgroundColor: t.statusBg, color: t.statusColor }}>
                    {t.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER FRAMEWORK CARD CONTAINER: EVENT TRACKING LOG */}
      <div style={tmStyles.eventLogCardContainer}>
        <h3 style={tmStyles.containerBlockTitle}>Trip Event Log</h3>
        <div style={tmStyles.logGridMatrixLayout}>
          {eventsLog.map((log) => (
            <div key={log.id} style={tmStyles.logEventRowStrip}>
              <div style={tmStyles.logEventLeftStatusCluster}>
                <div style={{ ...tmStyles.logStatusNodePoint, backgroundColor: log.color }} />
                <div style={tmStyles.logTextStackTextGroup}>
                  <span style={tmStyles.logEventHeadingTitleText}>{log.title}</span>
                  <span style={tmStyles.logEventSecondaryDescText}>{log.desc}</span>
                </div>
              </div>
              <span style={tmStyles.logTimestampCounterText}>{log.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const tmStyles = {
  workspace: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '24px', 
    width: '100%', 
    boxSizing: 'border-box' 
  },
  headerContextSegment: { 
    textAlign: 'left' 
  },
  viewTitleText: { 
    fontSize: '22px', 
    fontWeight: 800, 
    color: '#0F172A', 
    margin: 0 
  },
  viewSubtitleText: { 
    fontSize: '13px', 
    fontWeight: 500, 
    color: '#64748B', 
    marginTop: '4px', 
    margin: 0 
  },
  statsRowGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
    gap: '20px', 
    width: '100%' 
  },
  statCard: { 
    backgroundColor: '#ffffff', 
    borderRadius: '16px', 
    border: '1px solid #E2E8F0', 
    padding: '20px', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    boxShadow: '0 1px 2px rgba(0,0,0,0.01)' 
  },
  statBodyBlock: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '6px', 
    textAlign: 'left' 
  },
  statLabelText: { 
    fontSize: '12px', 
    color: '#64748B', 
    fontWeight: 600 
  },
  statNumberGroup: { 
    display: 'flex', 
    alignItems: 'baseline', 
    gap: '8px' 
  },
  statNumberText: { 
    fontSize: '24px', 
    fontWeight: 800, 
    color: '#0F172A' 
  },
  statTrendText: { 
    fontSize: '11px', 
    fontWeight: 700 
  },
  statIconBadge: { 
    width: '36px', 
    height: '36px', 
    borderRadius: '12px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  mainLayoutColumnsRow: { 
    display: 'flex', 
    gap: '24px', 
    width: '100%', 
    alignItems: 'stretch' 
  },
  routePerformanceCard: { 
    backgroundColor: '#ffffff', 
    borderRadius: '16px', 
    border: '1px solid #E2E8F0', 
    padding: '24px', 
    flex: 2, 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '20px' 
  },
  performanceGridTable: { 
    display: 'flex', 
    flexDirection: 'column', 
    width: '100%' 
  },
  tableHeaderRow: { 
    display: 'grid', 
    gridTemplateColumns: '1.5fr 1fr 1fr 1fr', 
    paddingBottom: '12px', 
    borderBottom: '1px solid #F1F5F9' 
  },
  tableHeaderLabel: { 
    fontSize: '10px', 
    fontWeight: 800, 
    color: '#94A3B8', 
    letterSpacing: '0.5px', 
    textAlign: 'left' 
  },
  tableDataDataRow: { 
    display: 'grid', 
    gridTemplateColumns: '1.5fr 1fr 1fr 1fr', 
    padding: '16px 0', 
    alignItems: 'center', 
    borderBottom: '1px solid #F8FAFC' 
  },
  routeNameText: { 
    fontSize: '13px', 
    fontWeight: 700, 
    color: '#1E293B', 
    textAlign: 'left' 
  },
  routeMetricsText: { 
    fontSize: '12px', 
    fontWeight: 600, 
    color: '#475569', 
    textAlign: 'left' 
  },
  loadStatusPill: { 
    fontSize: '11px', 
    fontWeight: 700, 
    color: '#ffffff', 
    padding: '4px 12px', 
    borderRadius: '50px', 
    textAlign: 'center', 
    width: 'fit-content' 
  },
  containerBlockTitle: { 
    fontSize: '15px', 
    fontWeight: 800, 
    color: '#0F172A', 
    margin: 0, 
    textAlign: 'left' 
  },
  activeTripsPanelCard: { 
    backgroundColor: '#ffffff', 
    borderRadius: '16px', 
    border: '1px solid #E2E8F0', 
    padding: '24px', 
    flex: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '20px', 
    minWidth: '340px' 
  },
  tripsScrollContainer: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '16px', 
    maxHeight: '340px', 
    overflowY: 'auto' 
  },
  tripListItemRow: { 
    border: '1px solid #F1F5F9', 
    borderRadius: '12px', 
    padding: '16px', 
    backgroundColor: '#FAFCFF', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    gap: '12px' 
  },
  tripMetaInfoBlock: { 
    display: 'flex', 
    flexDirection: 'column', 
    flex: 1, 
    textAlign: 'left' 
  },
  tripGridRow: { 
    display: 'grid', 
    gridTemplateColumns: '70px 1fr', 
    gap: '8px', 
    alignItems: 'baseline' 
  },
  metaColumnHeadLabel: { 
    fontSize: '9px', 
    fontWeight: 800, 
    color: '#94A3B8', 
    letterSpacing: '0.5px', 
    textTransform: 'uppercase' 
  },
  tripIdentifierText: { 
    fontSize: '11px', 
    fontWeight: 700, 
    color: '#64748B' 
  },
  entityNameDataText: { 
    fontSize: '12px', 
    fontWeight: 700, 
    color: '#1E293B' 
  },
  metaSubTextLabel: { 
    fontSize: '10px', 
    fontWeight: 600, 
    color: '#94A3B8', 
    textTransform: 'capitalize' 
  },
  routePathDesignationText: { 
    fontSize: '11px', 
    fontWeight: 600, 
    color: '#1E3A8A' 
  },
  tripStatusBadgeContainerColumn: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-end', 
    gap: '6px', 
    flexShrink: 0 
  },
  liveStatusBadgeMarkup: { 
    fontSize: '10px', 
    fontWeight: 700, 
    padding: '4px 10px', 
    borderRadius: '50px', 
    whiteSpace: 'nowrap' 
  },
  eventLogCardContainer: { 
    backgroundColor: '#ffffff', 
    borderRadius: '16px', 
    border: '1px solid #E2E8F0', 
    padding: '24px', 
    width: '100%', 
    boxSizing: 'border-box', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '20px' 
  },
  logGridMatrixLayout: { 
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr', 
    gap: '14px 40px', 
    width: '100%', 
    boxSizing: 'border-box' 
  },
  logEventRowStrip: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    borderBottom: '1px solid #F8FAFC', 
    paddingBottom: '10px', 
    gap: '16px' 
  },
  logEventLeftStatusCluster: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px', 
    textAlign: 'left' 
  },
  logStatusNodePoint: { 
    width: '6px', 
    height: '6px', 
    borderRadius: '50%', 
    flexShrink: 0 
  },
  logTextStackTextGroup: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '2px' 
  },
  logEventHeadingTitleText: { 
    fontSize: '12px', 
    fontWeight: 700, 
    color: '#1E293B' 
  },
  logEventSecondaryDescText: { 
    fontSize: '11px', 
    color: '#94A3B8', 
    fontWeight: 500 
  },
  logTimestampCounterText: { 
    fontSize: '11px', 
    color: '#94A3B8', 
    fontWeight: 600, 
    flexShrink: 0 
  }
}