import Taskbar from "../../components/taskbar";
import AppIcon from "../../components/appIcon";

import quoi from "../../apps/quoi/infos.json"

function Home(){
    return(
        <>
        <Taskbar>
            <AppIcon appName={quoi.name} imgSrc={quoi.icon_path}/>
        </Taskbar>
        </>
    )
}
export default Home;