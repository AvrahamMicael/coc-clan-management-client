import { ReactNode } from 'react';

type Props = { children: ReactNode };

const Panel = ({ children }: Props) => (
  <main className="panel">
    <section className="p-2 rounded panel-layer-2">
      { children }
    </section>
  </main>
);

export default Panel;
