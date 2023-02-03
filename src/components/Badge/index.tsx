import { useTheme } from "styled-components";
import Typography from "../Typography";
import { BadgeContainer } from "./styles";

interface BadgeProps {
  tag: string;
}

export const Badge = ({ tag }: BadgeProps) => {
  const theme = useTheme();

  return (
    <BadgeContainer>
      <Typography size={12} weight={700} color={theme.colors.yellow.dark}>
        {tag}
      </Typography>
    </BadgeContainer>
  );
};
