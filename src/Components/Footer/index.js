import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="right" spacing={2}>
              {[0].map((value) => (
                <Grid key={value} item>
                  <Typography>
                    <div>
                      p: 555-212-1212
                    </div>
                    <div>
                      e: happy@clients.com
                    </div>
                    <div>
                      &copy; 2022
                    </div>
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}