import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import DashboardScreen from './screens/DashboardScreen'
import { Search, Bell } from 'lucide-react'

export default function App() {
  const [activePage, setActivePage] = useState('dashboard')

  return (
    <div style={appStyles.appFrame}>
      {/* Sidebar remains completely frozen on the left */}
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      
      {/* Right Content Stream Viewport */}
      <main style={appStyles.mainViewport}>
        
        {/* Top Header Toolbar with Package Icons */}
        <header style={appStyles.header}>
          <div style={appStyles.headerLeftContainer}>
            <h2 style={appStyles.headerTitle}>
              {activePage === 'dashboard' ? 'Dashboard' : activePage.replace('-', ' ')}
            </h2>
            <div style={appStyles.searchBar}>
              <Search size={14} strokeWidth={2.5} color="#94A3B8" />
              {/* TODO: Connect global search query value and onChange handler to backend filtering logic */}
              <input type="text" placeholder="Search trips, drivers, students..." style={appStyles.searchInput} />
            </div>
          </div>
          
          <div style={appStyles.headerRightContainer}>
            <div style={appStyles.dateBlock}>
              <p style={appStyles.dateLabel}>TODAY'S DATE</p>
              {/* TODO: Implement a useEffect hook to display the actual live system date and time dynamically */}
              <p style={appStyles.dateValue}>October 24, 2023 • 14:45</p>
            </div>
            {/* TODO: Route administrator to notifications center panel on click */}
            <button style={appStyles.bellButton}>
              <Bell size={16} strokeWidth={2.5} color="#64748B" />
            </button>
          </div>
        </header>
        
        {/* Scrollable View Area Frame */}
        <div style={appStyles.contentCanvas}>
          {activePage === 'dashboard' && <DashboardScreen />}
          
          {/* TODO: Replace fallback components with real layout screens as they are developed */}
          {activePage !== 'dashboard' && (
            <div style={appStyles.fallbackBox}>
              <h3 style={appStyles.fallbackTitle}>{activePage.replace('-', ' ')} Shell</h3>
              <p style={appStyles.fallbackDesc}>Global inline framework operating successfully.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

// ── CLEAN ARRANGED WRAPPER STYLE SHEET ───────────────────────────────────────
const appStyles = {
  /* Master Application Window Boundary Canvas */
  appFrame: { 
    display: 'flex', 
    position: 'fixed',    /* 🌟 Locks the canvas down globally to prevent swiping gestures */
    inset: 0,             /* 🌟 Snaps boundaries tightly to all corners of the browser screen */
    height: '100vh', 
    width: '100vw', 
    backgroundColor: '#F8FAFC', 
    overflow: 'hidden',   /* 🌟 Hard-blocks any outer canvas text/content overflow bleed */
    margin: 0, 
    padding: 0,
    boxSizing: 'border-box'
  },
  
  /* Main Right Hand Management Panel Context */
  mainViewport: { 
    flex: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    maxWidth: 'calc(100vw - 240px)', /* 🌟 Hard limits right panel to screen space minus sidebar */
    height: '100vh', 
    overflowX: 'hidden'   /* 🌟 Guarantees zero side-to-side shifting or swiping */
  },
  
  /* Top Toolbar Controls Layout */
  header: { 
    height: '64px', 
    backgroundColor: '#ffffff', 
    borderBottom: '1px solid #E2E8F0', 
    padding: '0 32px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    flexShrink: 0 
  },
  headerLeftContainer: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '24px' 
  },
  headerTitle: { 
    fontSize: '18px', 
    fontWeight: 800, 
    color: '#1E293B', 
    textTransform: 'capitalize', 
    fontFamily: 'Inter, sans-serif', 
    margin: 0 
  },
  searchBar: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px', 
    backgroundColor: '#F8FAFC', 
    padding: '8px 14px', 
    borderRadius: '12px', 
    border: '1px solid #E2E8F0', 
    width: '320px' 
  },
  searchInput: { 
    background: 'transparent', 
    border: 'none', 
    outline: 'none', 
    fontSize: '12px', 
    color: '#334155', 
    width: '100%', 
    fontFamily: 'Inter, sans-serif' 
  },
  headerRightContainer: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '16px' 
  },
  dateBlock: { 
    textAlign: 'right' 
  },
  dateLabel: { 
    fontSize: '9px', 
    fontWeight: 800, 
    color: '#94A3B8', 
    letterSpacing: '1px', 
    margin: 0, 
    fontFamily: 'Inter, sans-serif' 
  },
  dateValue: { 
    fontSize: '12px', 
    fontWeight: 700, 
    color: '#334155', 
    margin: '2px 0 0 0', 
    fontFamily: 'Inter, sans-serif' 
  },
  bellButton: { 
    height: '32px', 
    width: '32px', 
    borderRadius: '12px', 
    backgroundColor: '#F8FAFC', 
    border: '1px solid #E2E8F0', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    cursor: 'pointer' 
  },
  
  /* Scrollable Workspace Viewport Area Frame */
  contentCanvas: { 
    flex: 1, 
    padding: '32px', 
    boxSizing: 'border-box', 
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  
  /* Mock Fallback Structural Container Boxes */
  fallbackBox: { 
    height: '384px', 
    backgroundColor: '#ffffff', 
    borderRadius: '16px', 
    border: '1px solid #E2E8F0', 
    padding: '24px', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    textAlign: 'center' 
  },
  fallbackTitle: { 
    fontSize: '16px', 
    fontWeight: 800, 
    color: '#0F172A', 
    textTransform: 'capitalize', 
    margin: 0 
  },
  fallbackDesc: { 
    fontSize: '12px', 
    color: '#94A3B8', 
    fontWeight: 500, 
    marginTop: '8px' 
  }
}