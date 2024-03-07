// import Navbar from '@/components/administrador/Navbar';
// import Dashboard from '@/components/administrador/Dashboard';
import ProductsTable from '@/components/administrador/ProductsTable';

export default function Admin() {
  return (
  <div className='wrapper p-4'>
    <div className="h-[70px]"></div>
    <ProductsTable />
  </div>
  );
}