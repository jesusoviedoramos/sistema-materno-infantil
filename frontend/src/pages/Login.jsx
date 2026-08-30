import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [rut, setRut] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
  e.preventDefault()

  if (!rut.trim() || !password.trim()) {
    setError('Debes completar todos los campos.')
    return
  }

  setError('')

  navigate('/dashboard')
  }

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '420px' }}>
        <div className="card-body">
          <h1 className="text-center mb-2 fs-3">
            Sistema Materno-Infantil
          </h1>

          <p className="text-center text-muted mb-4">
            Inicio de sesión
          </p>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="rut" className="form-label">
                RUT
              </label>

              <input
                type="text"
                className="form-control"
                id="rut"
                placeholder="Ej: 12.345.678-9"
                value={rut}
                onChange={(e) => setRut(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>

              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login