import style from './style.module.scss';

const Spinner = () => (
  <div className={`${style.loader} absolute-center`}>
    <svg className={ style.svg } viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle className={`${style.load} ${style.one}`} cx="60" cy="60" r="40" />
      <circle className={`${style.load} ${style.two}`} cx="60" cy="60" r="40" />
      <circle className={`${style.load} ${style.three}`} cx="60" cy="60" r="40" />
      <g>
        <circle className={`${style.point} ${style.one}`} cx="45" cy="70" r="5" />
        <circle className={`${style.point} ${style.two}`} cx="60" cy="70" r="5" />
        <circle className={`${style.point} ${style.three}`} cx="75" cy="70" r="5" />
      </g>
    </svg>
  </div>
);

export default Spinner;
