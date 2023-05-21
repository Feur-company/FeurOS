import Window from "../../components/window";
import Image from "next/image";

export const infos = {
    "name": "Quoi",
    "icon_path": "/appsIcon/quoi.jpeg"

};

export function window(){
    return(
        <Window>
            <Image
                src="/appsImages/quoi/feur.gif"
                width={200}
                height={200}
                alt="FEUR"
            />
        </Window>
        
    )
}