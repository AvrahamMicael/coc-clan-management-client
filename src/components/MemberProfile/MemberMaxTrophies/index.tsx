import style from './style.module.scss';
import SecondaryInfo from './../SecondaryInfo/index';

type Props = { bestTrophies: number };

const MemberMaxTrophies = ({ bestTrophies }: Props) => (
  <SecondaryInfo
    name='trophies'
    title='All time best'
    className={`${style.trophies} trophies`}
    value={ bestTrophies }
  />
);

export default MemberMaxTrophies;
