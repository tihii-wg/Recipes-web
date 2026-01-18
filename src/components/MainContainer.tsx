type Props = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: Props) {
  return <div className="main-container">{children}</div>;
}
