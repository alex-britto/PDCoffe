import { StyledStatus } from "./styles";

interface StatusProps extends React.HTMLAttributes<HTMLParagraphElement> {
  name: string;
}

export const Status = ({ name, ...props }: StatusProps) => {
  return <StyledStatus {...props}>{name}</StyledStatus>;
};
