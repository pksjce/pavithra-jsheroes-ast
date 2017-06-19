// Import React
import React from "react";

// Import Spectacle Core tags
import {
  List,
  ListItem,
  Deck,
  Heading,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
  Fill,
  Link,
  Appear
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  slide1: require("../assets/slide1.jpg"),
  topicIntro1: require("../assets/topic-intro1.jpg"),
  topicIntro2: require("../assets/topic-intro2.jpg"),
  topicIntro3: require("../assets/topic-intro.jpg"),
  me: require("../assets/me.jpg"),
  india: require("../assets/indiaBlr.png"),
  introme2: require("../assets/introme2.jpg"),
  slide1a: require("../assets/slide1a.jpg"),
  slide1b: require("../assets/slide1b.jpg"),
  slide1c: require("../assets/slide1c.jpg"),
  slide2: require("../assets/slide2.jpg"),
  slide3: require("../assets/slide3.jpg"),
  slide4: require("../assets/slide4.jpg"),
  slide6a: require("../assets/slide6a.jpg"),
  slide6b: require("../assets/slide6b.jpg"),
  slide6c: require("../assets/slide6c.jpg"),
  slide7a: require("../assets/slide7a.jpg"),
  slide7b: require("../assets/slide7b.jpg"),
  programsplit: require("../assets/programsplit.jpg"),
  firstlinesplit: require("../assets/firstlinesplit.jpg"),
  secondlinesplit: require("../assets/secondlinesplit.jpg"),
  thirdlinesplit: require("../assets/thirdlinesplit.jpg"),
  usea: require("../assets/usea.jpg"),
  useb: require("../assets/useb.jpg"),
  usec: require("../assets/usec.jpg"),
  used: require("../assets/used.jpg"),
  static: require("../assets/static.jpg"),
  codemods: require("../assets/codemods.jpg"),
  parsers: require("../assets/parsers.jpg"),
  flipkart: require("../assets/flipkart.png"),
  compiler: require("../assets/compiler.jpg")
  // slide4: require("../assets/slide4.jpg"),
  // slide4: require("../assets/slide4.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "black",
  secondary: "#ffd900",
  tertiary: "white"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="pacman" controls>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            As Simple As AST
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Getting Started with Static Analysis in Javascript
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text margin="0 0 40px" size={10} textColor="secondary">Pavithra Kodmad</Text>
          <Layout>
            <Fill><Image src={images.flipkart} /></Fill>
            <Fill><Image src={images.india} width="400" height="400" /></Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.introme2} height="300" />
          <Text size={6} textColor="secondary">Pavithra Kodmad</Text>
          <Link href="https://twitter.com/PKodmad" target="_blank" style={{ color: "white" }}>@PKodmad</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Agenda</Heading>
          <Image src={images.topicIntro1} width="300" height="300" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Agenda</Heading>
          <Image src={images.topicIntro2} width="600" height="300"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Agenda</Heading>
          <Image src={images.topicIntro3} width="900" height="300"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.slide1a} width="900" height="400"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.slide1b} width="900" height="400"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.slide1c} width="900" height="400"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Enter Compiler</Heading>
          <Image src={images.slide2} height="400"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.slide3} height="400"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.slide4} height="400"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.compiler} height="400"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textColor="secondary">Trees</Heading>
          <Layout>
            <Appear><Fill><Image src={images.slide6a} height="200"/></Fill></Appear>
            <Appear><Fill><Image src={images.slide6b} height="200"/></Fill></Appear>
            <Appear><Fill><Image src={images.slide6c} height="200"/></Fill></Appear>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Quote>An Abstract Syntax Tree is a data structure that represents source code.</Quote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textColor="secondary">Abstract Syntax Trees</Heading>
          <List>
            <Appear><ListItem>are specific to a language</ListItem></Appear>
            <Appear><ListItem>care only about syntax</ListItem></Appear>
            <Appear><ListItem>should convert to working source code</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Text size={6} textColor="secondary">A note on parsers</Text>
            <Image src={images.parsers} height="400"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.slide7a} height="400"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.programsplit} height="300"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.firstlinesplit} height="300"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.secondlinesplit} height="300" width="700"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.thirdlinesplit} height="400" width="800"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textColor="secondary">Why ASTs?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.static} height="300" width="800"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textColor="secondary">Babel</Heading>
          <Layout>
            <Fill style={{ marginRight: "50px" }}>
              <Image src={images.usea} height="400"/>
            </Fill>
            <Fill>
              <List>
                <ListItem>
                  Babylon
                </ListItem>
                <ListItem>
                  Engine
                </ListItem>
                <ListItem>
                  Plugins
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textColor="secondary">ESLint</Heading>
          <Layout>
            <Fill style={{ marginRight: "50px" }}>
              <Image src={images.useb} height="400"/>
            </Fill>
            <Fill>
              <List>
                <ListItem>
                  Espree
                </ListItem>
                <ListItem>
                  Analysis
                </ListItem>
                <ListItem>
                  Plugins
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textColor="secondary">Webpack</Heading>
          <Layout>
            <Fill style={{ marginRight: "50px" }}>
              <Image src={images.usec} height="400"/>
            </Fill>
            <Fill>
              <List>
                <ListItem>
                  Modules
                </ListItem>
                <ListItem>
                  Loaders
                </ListItem>
                <ListItem>
                  Source maps
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textColor="secondary">UglifyJs</Heading>
          <Layout>
            <Fill style={{ marginRight: "50px" }}>
              <Image src={images.usec} height="400"/>
            </Fill>
            <Fill>
              <List>
                <ListItem>
                  Parse.js
                </ListItem>
                <ListItem>
                  Compress
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textColor="secondary">Prettier</Heading>
          <Layout>
            <Fill style={{ marginRight: "50px" }}>
              <Image src={images.used} height="400"/>
            </Fill>
            <Fill>
              <List>
                <ListItem>
                  Ast-types
                </ListItem>
                <ListItem>
                  Pretty Print
                </ListItem>
                <ListItem>
                  Opinionated
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>How to use it right-away?</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Link href="http://localhost:8080/" target="_blank" style={{ color: "white" }}>AST Explorer</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.codemods} height="300" width="100%"/>
          <Link href="https://github.com/webpack/webpack-cli" target="_blank" style={{ color: "white" }}>webpack-cli</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textColor="secondary">Takeaways</Heading>
          <List>
            <Appear><ListItem>ASTs are simple and awesome</ListItem></Appear>
            <Appear><ListItem>Widely used</ListItem></Appear>
            <Appear><ListItem>You can use them too!</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading caps textColor="secondary">Thank you</Heading>
          <Link href="https://twitter.com/PKodmad" target="_blank" style={{ color: "white" }}>@PKodmad</Link>
        </Slide>
      </Deck>
    );
  }
}
