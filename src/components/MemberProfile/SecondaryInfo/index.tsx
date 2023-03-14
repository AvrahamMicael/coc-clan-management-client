import style from './style.module.scss';

type Props = {
  name: string,
  title: string
  value: number,
  className: string,
};

const SecondaryInfo = ({ name, title, value, className }: Props) => (
  <div className="mt-3">
    <div className="profile-info-name fs-8">{ title }:</div>
    <div className={`${style['dark-purple-container']} position-relative rounded py-1 ps-5 pe-4 mx-auto`}>
      <span>{ value }</span>
      <i className={`${className} position-absolute`}>
        <span className="sr-only">{ name }</span>
      </i>
    </div>
  </div>
);

export default SecondaryInfo;
