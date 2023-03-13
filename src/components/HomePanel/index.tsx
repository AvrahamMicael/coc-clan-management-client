import { ReactNode } from 'react';
import NavLink from './NavLink/index';

type Props = { children: ReactNode };

const HomePanel = ({ children }: Props) => (
  <main className="home-panel">
    <nav className="panel-options">
      <NavLink name='Members' path='/'/>
      <NavLink name='Promotions' path='/promotions'/>
    </nav>
    <section className="p-2 rounded panel-layer-2">
      { children }
    </section>
  </main>
);

export default HomePanel;
