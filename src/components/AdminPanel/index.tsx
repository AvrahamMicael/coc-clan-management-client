import { ReactNode } from "react";
import style from './style.module.scss';

type Props = { children: ReactNode };

const AdminPanel = ({ children }: Props) => (
  <main className="d-flex justify-content-center">
    <section className={`${style['admin-card']} panel-layer-1 p-2 rounded`}>
      <div className="panel-layer-2 p-4 rounded">
        { children }
      </div>
    </section>
  </main>
);

export default AdminPanel;

