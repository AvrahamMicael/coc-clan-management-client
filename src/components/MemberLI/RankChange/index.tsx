import DownRank from "./DownRank";
import EqualsRank from "./EqualsRank";
import UpRank from "./UpRank";

type Props = { currentRank: number, previousRank: number };

const RankChange = ({ currentRank, previousRank }: Props) => {
  const diff: number = previousRank - currentRank;

  if(diff == 0)
    return <EqualsRank/>;

  const Tag = diff > 0 ? UpRank : DownRank;
  return <Tag diff={ diff }/>;
};

export default RankChange;
