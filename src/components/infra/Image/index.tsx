import NextImage from 'next/image';

type Props = React.ComponentProps<typeof NextImage>;

const Image = (props: Props) => (
  <NextImage {...props}/>
);

export default Image;
