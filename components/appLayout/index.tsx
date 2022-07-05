import React, { ReactNode } from 'react';
import Header from '../header';

interface Props {
  children: ReactNode,
}

const AppLayout = ({
  children,
}: Props) => (
  <>
    <Header className="fixed top-0 w-full z-30 max-w-screen-2xl" />
    <main>{children}</main>
  </>
);

export default AppLayout;
