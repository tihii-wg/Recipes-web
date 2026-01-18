type Props = {
  children: string;
  handler: () => void | undefined;
  isDisabled?: boolean | undefined;
};

export default function Button({ children, handler, isDisabled }: Props) {
  return (
    <button
      className="button"
      disabled={isDisabled}
      onClick={() => {
        handler();
      }}
    >
      {children}
    </button>
  );
}
