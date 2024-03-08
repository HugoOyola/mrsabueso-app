// import Navbar from '@/components/administrador/Navbar';
// import Dashboard from '@/components/administrador/Dashboard';
import LogoutButton from '@/components/administrador/LogoutButton';
import ProductsTable from '@/components/administrador/ProductsTable';

export default function Admin() {
  return (
  <div className='wrapper p-4'>
    <div className="h-[70px]"></div>
    <LogoutButton />
    <ProductsTable />
  </div>
  );
}