import styled from "styled-components"
import { Typography } from "../Typography"

const TypographyExample = () => {
    return (
        <Container className="m-4">
            <Column>
                <Typography family="baloo" variant="h1" className="mr-4">
                    h1 Baloo
                </Typography>
                <Typography family="baloo" variant="h1Bold" className="mr-4">
                    h1Bold Baloo
                </Typography>
                <Typography family="baloo" variant="h2" className="mr-4">
                    h2 Baloo
                </Typography>
                <Typography family="baloo" variant="h2Bold" className="mr-4">
                    h2Bold Baloo
                </Typography>
                <Typography family="baloo" variant="h3" className="mr-4">
                    h3 Baloo
                </Typography>
                <Typography family="baloo" variant="h3Bold" className="mr-4">
                    h3Bold Baloo
                </Typography>
                <Typography family="baloo" variant="h4" className="mr-4">
                    h4 Baloo
                </Typography>
                <Typography family="baloo" variant="h4Bold" className="mr-4">
                    h4Bold Baloo
                </Typography>
            </Column>
            <Column>
                <Typography family="roboto" variant="h1" className="mr-4">
                    h1 Roboto
                </Typography>
                <Typography family="roboto" variant="h1Bold" className="mr-4">
                    h1Bold Roboto
                </Typography>
                <Typography family="roboto" variant="h2" className="mr-4">
                    h2 Roboto
                </Typography>
                <Typography family="roboto" variant="h2Bold" className="mr-4">
                    h2Bold Roboto
                </Typography>
                <Typography family="roboto" variant="h3" className="mr-4">
                    h3 Roboto
                </Typography>
                <Typography family="roboto" variant="h3Bold" className="mr-4">
                    h3Bold Roboto
                </Typography>
                <Typography family="roboto" variant="h4" className="mr-4">
                    h4 Roboto
                </Typography>
                <Typography family="roboto" variant="h4Bold" className="mr-4">
                    h4Bold Roboto
                </Typography>
                <Typography family="roboto" variant="caption" className="mr-4">
                    caption Roboto
                </Typography>
                <Typography family="roboto" variant="captionBold" className="mr-4">
                    captionBold Roboto
                </Typography>
                </Column>
            <Column>
                <Typography family="roboto" variant="p" className="mr-4">
                    p Roboto
                </Typography>
                <Typography family="roboto" variant="pBold" className="mr-4">
                    pBold Roboto
                </Typography>
                <Typography family="roboto" variant="span" className="mr-4">
                    span Roboto
                </Typography>
                <Typography family="roboto" variant="spanBold" className="mr-4">
                    spanBold Roboto
                </Typography>
            </Column>
        </Container>
    )
}

const Container = styled.div`
  display: block;
  align-items: center;
  gap: 4px;
`

const Column = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
`

export default TypographyExample