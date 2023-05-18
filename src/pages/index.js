import Taskbar from "../../components/taskbar";
import AppIcon from "../../components/appIcon";

import {infos, run} from "../../apps/quoi";

function Home(){
    return(
        <>
        <Taskbar>
            <AppIcon onClick={run} appName={infos.name} imgSrc={infos.icon_path}/>
        </Taskbar>
        </>
    )
}
export default Home;