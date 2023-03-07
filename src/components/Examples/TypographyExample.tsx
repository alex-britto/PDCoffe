import { Typography } from "../Typography/Typography"

export const TypographyExample = () => {
  return (
    <>
      <div className="flex w-full gap-10 items-center mt-6">
        <Typography family="header" variant="h1" className="mr-4">
          h1 Baloo
        </Typography>
        <Typography
          family="header"
          variant="h1"
          fontWeight="800"
          className="mr-4"
        >
          h1 Bold Baloo
        </Typography>
        <Typography family="header" variant="h2" className="mr-4">
          h2 Baloo
        </Typography>
        <Typography
          family="header"
          variant="h2"
          fontWeight="800"
          className="mr-4"
        >
          h2 Bold Baloo
        </Typography>
        <Typography family="header" variant="h3" className="mr-4">
          h3 Baloo
        </Typography>
        <Typography
          family="header"
          variant="h3"
          fontWeight="800"
          className="mr-4"
        >
          h3 Bold Baloo
        </Typography>
        <Typography family="header" variant="h4" className="mr-4">
          h4 Baloo
        </Typography>
        <Typography
          family="header"
          variant="h4"
          fontWeight="800"
          className="mr-4"
        >
          h4 Bold Baloo
        </Typography>
        <Typography family="header" variant="h5" className="mr-4">
          h5 Baloo
        </Typography>
        <Typography
          family="header"
          variant="h5"
          fontWeight="800"
          className="mr-4"
        >
          h5 Bold Baloo
        </Typography>
      </div>

      <div className="flex w-full gap-10 items-center mt-6 mb-10">
        <Typography family="text" variant="h1" className="mr-4">
          h1 Roboto
        </Typography>
        <Typography
          family="text"
          variant="h1"
          fontWeight="700"
          className="mr-4"
        >
          h1Bold Roboto
        </Typography>
        <Typography family="text" variant="h2" className="mr-4">
          h2 Roboto
        </Typography>
        <Typography
          family="text"
          variant="h2"
          fontWeight="700"
          className="mr-4"
        >
          h2 Bold Roboto
        </Typography>
        <Typography family="text" variant="h3" className="mr-4">
          h3 Roboto
        </Typography>
        <Typography
          family="text"
          variant="h3"
          fontWeight="700"
          className="mr-4"
        >
          h3 Bold Roboto
        </Typography>
        <Typography family="text" variant="h4" className="mr-4">
          h4 Roboto
        </Typography>
        <Typography
          family="text"
          variant="h4"
          fontWeight="700"
          className="mr-4"
        >
          h4Bold Roboto
        </Typography>
        <Typography family="text" variant="h5" className="mr-4">
          h5 Roboto
        </Typography>
        <Typography
          family="text"
          variant="h5"
          fontWeight="700"
          className="mr-4"
        >
          h5 Bold Roboto
        </Typography>
      </div>
      <div className="flex w-full gap-10 items-center mt-6 mb-10">
        <Typography family="text" variant="p" className="mr-4">
          p Roboto
        </Typography>
        <Typography family="text" variant="p" fontWeight="700" className="mr-4">
          p Bold Roboto
        </Typography>
        <Typography family="text" variant="span" className="mr-4">
          span Roboto
        </Typography>
        <Typography
          family="text"
          variant="span"
          fontWeight="700"
          className="mr-4"
        >
          span Bold Roboto
        </Typography>
      </div>
    </>
  )
}
