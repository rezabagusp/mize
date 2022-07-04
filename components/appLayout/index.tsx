import React, { ReactNode } from 'react';
import Header from '../header';

interface Props {
  children: ReactNode,
}

const AppLayout = ({
  children,
}: Props) => (
  <div className="pt-14">
    <Header className="fixed top-0 w-full z-30" />
    <main>{children}</main>
    {/* footer */}
  </div>
);

export default AppLayout;
