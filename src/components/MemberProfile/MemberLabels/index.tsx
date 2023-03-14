import Image from "@/components/infra/Image";
import { PlayerLabel } from "@/types";
import style from './style.module.scss';

type Props = { labels: PlayerLabel[] };

const MemberLabels = ({ labels }: Props) => (
  <div className={ style.labels }>
    {labels.map(({ id, name, iconUrls }) => (
      <Image src={ iconUrls.small } alt={ name } key={ id } title={ name } width={ 64 } height={ 64 }/>
    ))}
  </div>
);

export default MemberLabels;
