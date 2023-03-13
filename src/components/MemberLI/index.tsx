import { MemberWithAllData, MemberAvailableToPromotion } from "@/types";
import MemberRank from "./MemberRank";
import Image from './../infra/Image/index';
import XP from "../XP";
import MemberNameRole from "./MemberNameRole";
import Indicator from "./Indicator";
import Trophies from "./Trophies";
import RankChange from "./RankChange";
import Link from '@/components/infra/Link';

type Props = { member: MemberWithAllData & Partial<MemberAvailableToPromotion> };

const MemberLI = ({ member: { name, clanRank, previousClanRank, expLevel, league, role, donations, donationsReceived, trophies, tag, lastRaid, wars, war_leagues, games_points, roleToPromote } }: Props) => {
  const tagWithoutSharp: string = tag.replace('#', '');
  const listId: string = `T-${tagWithoutSharp}`;
  const memberHref: string = `member/${ tagWithoutSharp }`;
  const formattedLastRaidAttacks: string = `${lastRaid.attacks}/${lastRaid.attackLimit}`;
  return (
    <li className="rounded" id={ listId }>
      <Link href={ memberHref } className="d-flex align-items-center rounded">
        <div className="reflex"></div>
        <MemberRank clanRank={ clanRank }/>
        <RankChange currentRank={ clanRank } previousRank={ previousClanRank }/>
        <div className="vl"></div>
        <Image src={ league.iconUrls.tiny } alt={ league.name } width={ 36 } height={ 36 } className="mx-1"/>
        <div className="vl"></div>
        <XP expLevel={ expLevel } className="ms-2 me-1 p-1 fs-6"/>
        <div className="vl"></div>
        <MemberNameRole name={ name } role={ role } roleToPromote={ roleToPromote }/>
        <div className="ms-auto me-3 d-flex align-items-center">
          <div className="vl"></div>
          <Indicator name="games points" qty={ games_points } adminEditable displayNonePx={ 940 } updateStep={ 500 }/>
          <Indicator name="war leagues" qty={ war_leagues } adminEditable displayNonePx={ 860 }/>
          <Indicator name="wars" qty={ wars } adminEditable displayNonePx={ 790 }/>
          <Indicator name="last raid attacks" qty={ formattedLastRaidAttacks } displayNonePx={ 715 }/>
          <Indicator name="troops donated" qty={ donations } displayNonePx={ 665 }/>
          <Indicator name="troops received" qty={ donationsReceived }/>
          <Trophies qty={ trophies }/>
        </div>
      </Link>
    </li>
  );
};

export default MemberLI;
