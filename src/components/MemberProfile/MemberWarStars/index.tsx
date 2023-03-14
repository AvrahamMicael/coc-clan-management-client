import SecondaryInfo from "../SecondaryInfo";
import style from './style.module.scss';

type Props = { stars: number };

const MemberWarStars = ({ stars }: Props) => (
  <SecondaryInfo
    title="War stars won"
    name="stars"
    value={ stars }
    className={ style.stars }
  />
);

export default MemberWarStars;
