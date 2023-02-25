import { BadgeContainer } from "./styles";
import { Typography } from "../../components";
import { useTheme } from "styled-components";

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
