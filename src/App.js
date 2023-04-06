// import CssModule from "./Practice/CssModule/CssModule";
import styled, { ThemeProvider } from "styled-components";
// import SC from "./Practice/StyledComponents/SC";
import Button from "./Practice/StyledComponents/Button";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`

function App() {
  return (
    <>
      {/* CSS MODULE */}
      {/* <CssModule /> */}
      {/* <SC /> */}
      <ThemeProvider
        theme={{
          palette: {
            blue: '#228be6',
            gray: '#495057',
            pink: '#f06595'
          }
        }}
      >
        <AppBlock>
          <Button>BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button color="pink">BUTTON</Button>
        </AppBlock>
      </ThemeProvider>
    </>
  );
}

export default App;
