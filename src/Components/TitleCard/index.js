import Grid from '@mui/material/Grid';
import '../../App.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TitleCard = () => {
  return (
    <Box sx={{
      height: 200
    }}>
      <Grid>
        <Typography variant="h2" component="h2" align='center'>
          Vintage Electronics
        </Typography>
        <Typography variant="h6" component="h2" align='center'>
          Yesterday's Tomorrow is Tomorrow's Yesterday
        </Typography>
      </Grid>
    </Box>
  );
};

export default TitleCard;