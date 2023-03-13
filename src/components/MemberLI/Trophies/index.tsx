type Props = { qty: number };

const Trophies = ({ qty }: Props) => (
  <div className="border border-1 border-white rounded ps-3 pe-5 bg-trophies special-text-outline position-relative">
    <span>{ qty }</span>
    <i className="position-absolute trophies">
      <span className="sr-only">trophies</span>
    </i>
  </div>
);

export default Trophies;
