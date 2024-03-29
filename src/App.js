import {Container, createMuiTheme, CssBaseline, Paper, ThemeProvider} from "@material-ui/core";
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter, Route} from "react-router-dom";
import ChooseScreen from "./screens/ChooseScreen";

const theme = createMuiTheme({
    typography:{
        h1:{fontWeight: 'bold'},
        h2:{
            fontSize: '2rem',
            color: 'black',
        },
        h3:{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: 'white',
        }
    },
    palette:{
        primary:{main: '#FFFDF1'},
        secondary:{
            main: '#EF7631',
            contrastText:'#118e16'
        }
    },

});

function App() {
  return (
      <BrowserRouter>
          <ThemeProvider theme={theme}>
              <CssBaseline/>
              <Container maxWidth={"xl"}>
                  <Paper>
                      <Route path={"/"} component={HomeScreen} exact={true}></Route>
                      <Route path={"/choose"} component={ChooseScreen} exact={true}></Route>
                  </Paper>
              </Container>
          </ThemeProvider>
      </BrowserRouter>

  );
}

export default App;
