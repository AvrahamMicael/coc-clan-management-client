import style from './style.module.scss';

type Props = {
  name: string,
  qty: number | string,
  editable?: boolean,
};

const ExtraInfo = ({ name, qty, editable = false }: Props) => {
  const nameDisplayed: string = name + (editable ? '*' : '');
  return (
    <div className="d-flex justify-content-between align-items-center text-capitalize py-1">
      <span>{ nameDisplayed }</span>
      <div className={`${style.qty} py-1 rounded`}>{ qty }</div>
    </div>
  );
};

export default ExtraInfo;
