import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../../App.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {} from '@mui/icons-material';

const Card = () => {
  return(
  <Grid item xs={4}>
    <Paper elevation={3}>
      <img src="https://cdn.dribbble.com/users/5714894/screenshots/13446407/media/df77469f627f4858289de4fa461b65f9.jpg?compress=1&resize=1000x750&vertical=top" 
      alt="" 
      className="img"
      />
      <Box paddingX={1}>
      <Typography variant="h6" component="h2">
        Commodore 64
      </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
      <Typography paddingX={1} variant="body2" component="p">Hello World!</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
      <Typography paddingX={1} variant="body2" component="p">Hello World!</Typography>
      </Box>
    </Paper>
  </Grid>
  );
};
export default Card;