import MainLayout from '../layouts/MainLayout'

function Dashboard() {
  return (
    <MainLayout>
      <h1 className="mb-2">Dashboard</h1>

      <p className="text-muted">
        Bienvenido al Sistema Materno-Infantil.
      </p>

      <hr />

      <h2 className="fs-4">
        Selecciona un módulo para comenzar.
      </h2>
    </MainLayout>
  )
}

export default Dashboard