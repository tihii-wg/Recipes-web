// type Props = {
//   children: string | React.HTMLAttributes<HTMLSpanElement>;
//   handler?: () => void | undefined;
//   isDisabled?: boolean | undefined;
// };

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: Props) {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
}
