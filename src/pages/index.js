import Taskbar from "../../components/taskbar";
import AppIcon from "../../components/appIcon";

import quoi from "../../public/apps/quoi/infos.json"

function Home(){
    return(
        <>
        <Taskbar>
            <AppIcon imgSrc={quoi.app_icon_path}/>
        </Taskbar>
        </>
    )
}
export default Home;