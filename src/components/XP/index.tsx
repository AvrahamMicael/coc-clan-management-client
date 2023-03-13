type Props = { expLevel: number, className: string };

const XP = ({ expLevel, className }: Props) => (
  <div className={`xp special-text-outline d-flex justify-content-center align-items-center ${ className }`}>
    { expLevel }
  </div>
);

export default XP;
