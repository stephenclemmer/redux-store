import "./App.css";
import Header from "./Holding/Header";
import Products from "./products";
import Card from "./Components/Card/index.js";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchAppBar from "./Components/AppBar";
import MenuBar from "./Components/MenuBar";
import Footer from "./Components/Footer";
// import Typography from '@mui/material/Typography';
import TitleCard from "./Components/TitleCard";

function App() {
  return (
    <>
      <SearchAppBar sx={{ marginY: 5 }} />
      <MenuBar>
      </MenuBar>
      <TitleCard>
      </TitleCard>
      <Container>
        <Grid container spacing={5}>
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default App;