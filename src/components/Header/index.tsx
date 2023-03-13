import Image from "../infra/Image";
import COCImg from '../../../public/coc.png';
import Link from "../infra/Link";

const Header = () => (
  <header className="p-1 text-bg-dark bg-opacity-50 mb-5">
    <div className="d-flex justify-content-center">
      <Link href="/" className="d-flex flex-column align-items-center justify-content-center">
          <Image src={COCImg} alt='Clash of Clans logo' height={100} width={250}/>
          <span className="clan-name text-center">{ process.env.NEXT_PUBLIC_CLAN_NAME } clan</span>
      </Link>
    </div>
  </header>
);

export default Header;
