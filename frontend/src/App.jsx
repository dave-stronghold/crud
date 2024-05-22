import { Avatar, Button, Flex, Grid, View } from "@adobe/react-spectrum";
import Toolbar from "./components/toolbar";
import Content from "./components/content";
const avatarAddress =
  "https://64.media.tumblr.com/6505218202c423fda9f27a5a09f1e7ad/tumblr_n99qzp0ASm1sojb9co1_640.jpg";
function App() {
  return (
    <>
    <View
    backgroundColor={'gray-200'}>
    <Grid
        areas={[
          "header header header header",
          "toolbar menubar content sidebar ",
        ]}
        columns={["60px 1fr 3fr 1fr"]}
        rows={["size-700", "auto"]}
        height={"100vh"}
        gap={"size-10"}
      >
        <View
          paddingEnd={"size-200"}
          backgroundColor="gray-100"
          gridArea="header"
        >
          <Flex
            height={"100%"}
            justifyContent={"end"}
            gap={"size-150"}
            alignItems={"center"}
          >
            <Avatar size={"avatar-size-400"} src={avatarAddress}></Avatar>
            <Button variant="accent">PUBLISH</Button>
          </Flex>
        </View>
        <View
          paddingTop={'size-400'}
          backgroundColor="gray-100"
          gridArea="toolbar"
          children={<Toolbar/>}
        />
        <View
          backgroundColor="gray-100"
          gridArea="menubar"
        />
        <View
         
          backgroundColor="gray-200"
          gridArea="content"
          children={<Content/>}
        />
        <View
        
          backgroundColor="gray-100"
          gridArea="sidebar"
        />
      </Grid>
    </View>
      
    </>
  );
}

export default App;
