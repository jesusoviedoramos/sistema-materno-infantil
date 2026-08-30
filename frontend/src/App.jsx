import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Pacientes from './pages/Pacientes'
import Partos from './pages/Partos'
import RecienNacidos from './pages/RecienNacidos'
import Altas from './pages/Altas'
import Reportes from './pages/Reportes'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/pacientes" element={<Pacientes />} />

      <Route path="/partos" element={<Partos />} />

      <Route
        path="/recien-nacidos"
        element={<RecienNacidos />}
      />

      <Route path="/altas" element={<Altas />} />

      <Route path="/reportes" element={<Reportes />} />

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  )
}

export default App