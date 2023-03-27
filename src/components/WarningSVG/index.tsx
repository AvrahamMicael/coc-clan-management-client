import Image from "@/components/infra/Image";
import warning from "@/../public/warning.svg";

type Props = {
  message?: string,
  width?: number,
  height?: number,
};

const WarningSVG = ({ message = 'something went wrong', width = 150, height = 150 }: Props) => (
  <div className="size absolute-center">
    <Image src={ warning } width={ width } height={ height } alt="WARNING"/>
    <p className="warning-text">{ message }</p>
    
    <style jsx>{`
      .size
      {
        width: ${width}px;
        height: ${height}px;
      }
      .warning-text
      {
        color: #000;
        text-align: center;
        text-transform: uppercase;
        font-size: large;
        font-weight: 900;
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default WarningSVG;
