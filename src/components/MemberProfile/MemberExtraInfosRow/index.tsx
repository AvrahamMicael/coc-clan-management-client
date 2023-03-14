import style from './style.module.scss';
import ExtraInfo from './ExtraInfo/index';

type ExtraInfoProps = Parameters<typeof ExtraInfo>[0];

type Props = {
  infos: [ExtraInfoProps, ExtraInfoProps, ExtraInfoProps, ExtraInfoProps],
};

const MemberExtraInfosRow = ({ infos }: Props) => (
  <div className={`${style['member-extra-info-row']} special-text-outline fs-7 px-1`}>
    {infos.map(info => (
      <ExtraInfo {...info} key={ info.name }/>
    ))}
  </div>
);

export default MemberExtraInfosRow;
