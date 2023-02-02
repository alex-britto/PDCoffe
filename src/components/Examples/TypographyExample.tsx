import { Typography } from "../Typography/Typography"

export const TypographyExample = () => {
  return (
    <>
      <div className="flex w-full gap-10 items-center mt-6">
        <Typography family="header" variant="h1" className="mr-4">
          h1 Baloo
        </Typography>
        <Typography family="header" variant="h1Bold" className="mr-4">
          h1Bold Baloo
        </Typography>
        <Typography family="header" variant="h2" className="mr-4">
          h2 Baloo
        </Typography>
        <Typography family="header" variant="h2Bold" className="mr-4">
          h2Bold Baloo
        </Typography>
        <Typography family="header" variant="h3" className="mr-4">
          h3 Baloo
        </Typography>
        <Typography family="header" variant="h3Bold" className="mr-4">
          h3Bold Baloo
        </Typography>
        <Typography family="header" variant="h4" className="mr-4">
          h4 Baloo
        </Typography>
        <Typography family="header" variant="h4Bold" className="mr-4">
          h4Bold Baloo
        </Typography>
        <Typography family="header" variant="h5" className="mr-4">
          h5 Baloo
        </Typography>
        <Typography family="header" variant="h5Bold" className="mr-4">
          h5Bold Baloo
        </Typography>
      </div>

      <div className="flex w-full gap-10 items-center mt-6 mb-10">
        <Typography family="text" variant="h1" className="mr-4">
          h1 Roboto
        </Typography>
        <Typography family="text" variant="h1Bold" className="mr-4">
          h1Bold Roboto
        </Typography>
        <Typography family="text" variant="h2" className="mr-4">
          h2 Roboto
        </Typography>
        <Typography family="text" variant="h2Bold" className="mr-4">
          h2Bold Roboto
        </Typography>
        <Typography family="text" variant="h3" className="mr-4">
          h3 Roboto
        </Typography>
        <Typography family="text" variant="h3Bold" className="mr-4">
          h3Bold Roboto
        </Typography>
        <Typography family="text" variant="h4" className="mr-4">
          h4 Roboto
        </Typography>
        <Typography family="text" variant="h4Bold" className="mr-4">
          h4Bold Roboto
        </Typography>
        <Typography family="text" variant="h5" className="mr-4">
          h5 Roboto
        </Typography>
        <Typography family="text" variant="h5Bold" className="mr-4">
          h5Bold Roboto
        </Typography>
      </div>
    </>
  )
}
