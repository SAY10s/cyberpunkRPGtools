interface Props {
  children: React.ReactNode; // To oznacza, że children mogą być dowolnymi elementami React
}
const Box: React.FC<Props> = ({ children }) => {
  return <div className="rzuty-box">{children}</div>;
};

export default Box;
