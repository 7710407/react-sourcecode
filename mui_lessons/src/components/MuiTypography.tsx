import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography variant="subtitle1">h6 subtitle1</Typography>
      <Typography variant="subtitle2">h6 subtitel2</Typography>
      <Typography variant="body1">p body1</Typography>
      <Typography variant="body2">p body2</Typography>
    </>
  );
};

export default MuiTypography;
