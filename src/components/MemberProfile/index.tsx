import { MemberOnlyWithAllData } from '@/types';
import Image from '../infra/Image';
import XP from '../XP';
import MemberExtraInfosRow from './MemberExtraInfosRow';
import MemberLabels from './MemberLabels';
import MemberLeagueDetails from './MemberLeagueDetails';
import MemberMaxTrophies from './MemberMaxTrophies';
import MemberWarStars from './MemberWarStars';
import style from './style.module.scss';

type Props = {
  member: MemberOnlyWithAllData,
};

const MemberProfile = ({ member: { labels, name, tag, role, expLevel, clan, league, trophies, bestTrophies, warStars, donations, donationsReceived, attackWins, defenseWins, lastRaid, war_leagues, wars, games_points } }: Props) => (
  <>
    <div className={`${style['member-profile']} p-2 rounded-top special-text-outline`}>
      <div className="d-flex flex-column mb-5 position-relative">
        <div>
          <div className={ style['xp-name-role-container'] }>
            <XP expLevel={ expLevel } className="fs-5"/>
            <div className="d-flex flex-column position-relative member-name">
              <span className="position-relative">{ name }</span>
              <span className="position-relative fs-8">{ tag }</span>
              <span className="position-relative fs-8 text-capitalize">{ role }</span>
            </div>
          </div>
        </div>
        <MemberLabels labels={ labels }/>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center px-2">
        <h4 className="text-center">{ process.env.NEXT_PUBLIC_CLAN_NAME }</h4>
        <Image src={ clan.badgeUrls.medium } alt="Clan's Badge" width={200} height={200}/>
      </div>
      <div className="d-flex flex-column align-items-center">
        <MemberLeagueDetails league={ league } trophies={ trophies }/>
        <MemberMaxTrophies bestTrophies={ bestTrophies }/>
        <MemberWarStars stars={ warStars }/>
      </div>
    </div>
    <MemberExtraInfosRow
      infos={[
        { name: 'troops donated', qty: donations },
        { name: 'troops received', qty: donationsReceived },
        { name: 'attacks won', qty: attackWins },
        { name: 'defenses won', qty: defenseWins },
      ]}
    />
    <MemberExtraInfosRow
      infos={[
        { name: 'last raid attacks', qty: `${lastRaid.attacks}/${lastRaid.attackLimit}` },
        { name: 'war leagues', qty: war_leagues, editable: true },
        { name: 'wars', qty: wars, editable: true },
        { name: 'games points', qty: games_points, editable: true },
      ]}
    />
  </>
);

export default MemberProfile;
