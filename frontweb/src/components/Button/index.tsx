import './styles.css';

type Props = {
  text: string;
}

const Button = ( {text} : Props ) => {
  return (
    <div className="btn-container">
      <button className="btn">
        <h2>{text}</h2>
      </button>
    </div>
  );
};

export default Button;
