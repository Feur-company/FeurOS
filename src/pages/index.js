import Taskbar from "../../components/taskbar";
import AppIcon from "../../components/appIcon";

import {infos, window} from "../../apps/quoi";

function Home(){
    return(
        <>
        <Taskbar>
            <AppIcon Window={window} appName={infos.name} imgSrc={infos.icon_path}/>
        </Taskbar>
        </>
    )
}
export default Home;