import NextLink from 'next/link';

type Props = React.ComponentProps<typeof NextLink>;

const Link = ({ children, ...props }: Props) => (
  <NextLink {...props} passHref>
    { children }
  </NextLink>
);

export default Link;
