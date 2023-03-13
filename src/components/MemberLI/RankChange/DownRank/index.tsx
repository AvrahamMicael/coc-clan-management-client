import IconContainer from "../IconContainer";

type Props = { diff: number };

const DownRank = ({ diff }: Props) => {
  diff = Math.abs(diff);
  return (
    <IconContainer>
      <i className="d-block fa-solid fa-caret-down down-rank-icon">
        <span className="sr-only">rank down icon</span>
        {/* <span className="sr-only">__('rank down icon')</span> */}
        <span className="down-rank-text fs-7">{ diff }</span>
      </i>
    </IconContainer>
  );
};

export default DownRank;
