import { Menu } from "antd";

function amin_nav_bar(){

    return <div 
    style={({height:'100vh',
            backgroundColor: "rgb(0,150,122)"})}>
        <Menu 
        style={({height:'100vh',
        backgroundColor: "rgb(10,0,12)"})}

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
    </div>
}
export default amin_nav_bar