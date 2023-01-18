<<<<<<< HEAD
import "styled-components"
import { defaultTheme } from "../styles/themes/defaultTheme"

type ThemeType = typeof defaultTheme
=======
import "styled-components";
import { defaultTheme } from "../styles/themes/defaultTheme";

type ThemeType = typeof defaultTheme;
>>>>>>> 410e92ea139c3acc62e50fe00890f35759796137

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
