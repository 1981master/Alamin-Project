import './App.css';
import { Menu } from "antd";

import {amin_nav_bar} from "./amin_navbar";

function App() {
  return (
    <div className="App">
        <Menu 
        style={({height:'10vh',
        backgroundColor: "rgb(10,60,122)",
        color: "white"
         })}

            mode= "horizontal"
            items={[
                {
                    label: "Home",
                    key: "home",
                },
                {
                    label: "Classes",
                    key: "classes",
                }

            ]}
        ></Menu>
         This is Amino and Waseem.
    </div>
  );
}

export default App;
