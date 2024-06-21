import { FC} from 'react';
import stylees from '../style.module.css';
import GitHUb from '../assets/github-mark.svg'


interface RotatingTextProps {
  text: string;
  imageUrl?: string;
}

const RotatingText: FC<RotatingTextProps> = ({ text, imageUrl = `${GitHUb}` }) => {
  const formattedText = text.split('').map((char, i) => (
    <span key={i} style={{ transform: `rotate(${i * 10.3}deg)` }}>
      {char}
    </span>
  ));

  return (
    <a href="https://github.com/Jojo10x" target="blank">
    <div className={stylees.circle} >     
      <div className={stylees.logo} style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className={`${stylees.text} `} >
      {formattedText}
      </div>
    </div>
    </a>
  );
};



export default RotatingText;