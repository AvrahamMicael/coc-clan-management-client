type Props = { clanRank: number };

const MemberRank = ({ clanRank }: Props) => {
  const whiteSpaces: string = clanRank < 10 ? '&nbsp;' : '';
  const formattedRank: string = `${clanRank}.${whiteSpaces}`;
  return (
    <span
      className="d-inline-block mx-3 special-text-outline font-monospace"
      dangerouslySetInnerHTML={{
        __html: formattedRank
      }}
    ></span>
  );
};

export default MemberRank;
