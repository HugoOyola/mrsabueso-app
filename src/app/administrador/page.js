import Navbar from '@/components/administrador/Navbar';
import Dashboard from '@/components/administrador/Dashboard';

export default function Admin() {
  return (
  <div className='wrapper h-screen'>
    <div className="h-[70px]"></div>
    <Navbar />
    <Dashboard />
  </div>
  );
}