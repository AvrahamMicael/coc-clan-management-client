import IconContainer from "../IconContainer";

type Props = { diff: number };

const UpRank = ({ diff }: Props) => (
  <IconContainer>
    <i className="d-block fa-solid fa-caret-up up-rank-icon">
      <span className="sr-only">rank up icon</span>
      {/* <span className="sr-only">__('rank up icon')</span> */}
      <span className="up-rank-text fs-7">{ diff }</span>
    </i>
  </IconContainer>
);

export default UpRank;
