import Grid from '@mui/material/Grid';
import '../../App.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

const MenuBar = () => {
  return (
    <Box sx={{
      height: 200
    }}>
      <Grid>
        <Typography variant="h6" component="h2">
          Browse our Categories
        </Typography>
        <Typography>  Link 1 | Link 2</Typography>
      </Grid>
    </Box>
  );
};

export default MenuBar;