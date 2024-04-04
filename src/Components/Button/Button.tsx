type Button = {
  ButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  ButtonTitle: string;
  styling: string;
};

const Button = ({ ButtonTitle, ButtonClick }: Button) => {
  return (
    <>
      <button onClick={ButtonClick}>{ButtonTitle} </button>
    </>
  );
};

export default Button;
