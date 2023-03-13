import Link from "@/components/infra/Link";
import { useRouter } from "next/router";

type Props = {
  name: string,
  path: string,
};

const NavLink = ({ name, path }: Props) => {
  const { pathname } = useRouter();
  const id = pathname == path ? 'current-route' : undefined;
  return (
    <Link href={ path } id={ id }>{ name }</Link>
  );
};

export default NavLink;
