import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="bg-dark text-white min-vh-100 p-3" style={{ width: '250px' }}>
      <h4 className="mb-4">Materno-Infantil</h4>

      <nav className="nav flex-column gap-2">
        <NavLink className="nav-link text-white" to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink className="nav-link text-white" to="/pacientes">
          Pacientes
        </NavLink>

        <NavLink className="nav-link text-white" to="/partos">
          Partos
        </NavLink>

        <NavLink className="nav-link text-white" to="/recien-nacidos">
          Recién Nacidos
        </NavLink>

        <NavLink className="nav-link text-white" to="/altas">
          Altas
        </NavLink>

        <NavLink className="nav-link text-white" to="/reportes">
          Reportes
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar