import Image from '@/components/infra/Image';
import { League } from '@/types';
import { StaticImageData } from 'next/image';
import UnrankedIcon from '../../../../public/unranked.png';
import style from './style.module.scss';

type LeagueInfo = {
  iconUrl: string | StaticImageData,
  name: string,
};

type Props = { league?: League, trophies: number };

const MemberLeagueDetails = ({ league, trophies }: Props) => {
  const leagueInfo: LeagueInfo = {
    iconUrl: UnrankedIcon,
    name: 'Unranked',
  };
  if(league)
  {
    leagueInfo.name = league.name;
    leagueInfo.iconUrl = league.iconUrls.small;
  }
  return (
    <div className={ style['league-details'] }>
      <Image src={ leagueInfo.iconUrl } alt={ leagueInfo.name } width={72} height={72}/>
      <div>
        <div className={`${style['league-name']} fs-7`}>{ leagueInfo.name }</div>
        <div className={style['league-trophies']}>
          <i className="position-absolute trophies"></i>
          <span>{ trophies }</span>
        </div>
      </div>
    </div>
  );
};

export default MemberLeagueDetails;
