import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import FooterAdmin from '../FooterAdmin';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>
      <HeaderAdmin />
      <main>
        <Outlet />
      </main>
      <FooterAdmin />
    </>
  );
};

export default AdminLayout;
