import { Button, Stack, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Contained
        </Button>
        <Button variant="contained" color="warning">
          Contained
        </Button>
        <Button variant="contained" color="info">
          Contained
        </Button>
        <Button variant="contained" color="success">
          Contained
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Contained
        </Button>
        <Button variant="outlined" color="error">
          Contained
        </Button>
        <Button variant="outlined" color="warning">
          Contained
        </Button>
        <Button variant="outlined" color="info">
          Contained
        </Button>
        <Button variant="outlined" color="success">
          Contained
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          href="https://twitter.com"
          variant="contained"
          target="_blank"
          startIcon={<TwitterIcon />}
        >
          Link
        </Button>
        <Button
          href="https://twitter.com"
          variant="contained"
          target="_blank"
          endIcon={<TwitterIcon />}
        >
          Link
        </Button>
        <Button disableRipple
          href="https://google.com"
          variant="contained"
          target="_blank"
          startIcon={<SendIcon />}
          >
          Send
        </Button>
        <Button disableElevation
          href="https://google.com"
          variant="contained"
          target="_blank"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
        <IconButton color="success" size="large">
          <TwitterIcon/>
        </IconButton>
        <IconButton aria-aria-label="send button">
          <SendIcon/>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
