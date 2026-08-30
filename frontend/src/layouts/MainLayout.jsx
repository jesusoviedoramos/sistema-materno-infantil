import Sidebar from '../components/Sidebar'

function MainLayout({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />

      <main className="flex-grow-1 p-4">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
