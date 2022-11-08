// import "./App.css";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Card from "./Components/Card/index.js";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchAppBar from "./Components/Appbar";
// import MenuBar from "./Components/MenuBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <SearchAppBar sx={{marginY: 5}}/>
      {/* <MenuBar /> */}
      {/* <Container>

      </Container> */}
      <Container>
        {/* <Header /> */}
        <Grid container spacing={5}>
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
        {/* <Products /> */}
      </Container>
      <Footer />
    </>
  );
}

export default App;