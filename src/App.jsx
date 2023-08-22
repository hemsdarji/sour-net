import { Box, Stack} from "@mui/system";
import NavBar from "./component/NavBar";
import HeroSection from "./component/HeroSection";
import LeftSide from "./component/LeftSide";
import RightSide from "./component/RightSide";

const App = () => {
  return (
    <Box position="relative
    ">
      <NavBar />
      <Stack direction= 'row' sx={{ marginTop: '64px' }} spacing={2}>
        <LeftSide />
        <HeroSection />
        <RightSide />
      </Stack>
    </Box>
 
  )
}

export default App;