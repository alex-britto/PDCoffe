import { SpinnerContainer } from "./styles";

interface SpinnerProps {
  size: number;
  color: string;
}

export function Spinner({ size, color }: SpinnerProps) {
  return (
    <SpinnerContainer size={size} color={color}>
      <div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </SpinnerContainer>
  );
}
