import styled from "styled-components"
import { Typography } from "../Typography"

const TypographyExample = () => {
    return (
        <Container className="m-4">
        <Typography variant="h1">
            h1
        </Typography>
        <Typography variant="h2">
            h2
        </Typography>
        <Typography variant="h3">
            h3
        </Typography>
        <Typography variant="h4">
            h4
        </Typography>
        <Typography variant="title">
            title
        </Typography>
        <Typography variant="title" fontWeight="400">
            title normal
        </Typography>
        <Typography variant="subtitle">
            subtitle
        </Typography>
        <Typography variant="subtitle" fontWeight="700">
            subtitle bold
        </Typography>
        <Typography variant="body">
            body
        </Typography>
        <Typography variant="body" fontWeight="700">
            body bold
        </Typography>
        <Typography variant="caption">
            caption
        </Typography>
        <Typography variant="caption" fontWeight="700">
            caption bold
        </Typography>
        <Typography variant="subcaption">
            subcaption
        </Typography>
        <Typography variant="subcaption" fontWeight="700">
            subcaption bold
        </Typography>
        </Container>
    )
}

const Container = styled.div`
  display: block;
  align-items: center;
  gap: 4px;
`

export default TypographyExample