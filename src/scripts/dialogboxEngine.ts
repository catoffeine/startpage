import { DialogBoxClasses } from "./alias"
import { LocalStorage } from './localStorage'


namespace DialogBox {
    enum DialogType {
        Info = 'Info',
        Error = 'Error'
    }

    type DialogSettings = {
        message: string,
        dialog_type?: DialogType,
        life_time?: number
    }

    const create_dialogbox = (settings: DialogSettings): void => {
        settings.dialog_type = settings.dialog_type || DialogType.Info;
        settings.life_time = settings.life_time || 1.5; //in seconds

        const dialog_outer: HTMLDivElement = document.createElement('div');
        const dialog_box: HTMLDivElement = document.createElement('div');
        const dialog_container: HTMLDivElement = document.createElement('div');
        const dialog_timeline: HTMLDivElement = document.createElement('div');
        const dialog_infobox: HTMLDivElement = document.createElement('div');
        const dialog_message: HTMLParagraphElement = document.createElement('p');

        dialog_outer.classList.add(DialogBoxClasses.Outer);
        dialog_box.classList.add(DialogBoxClasses.DialogBox);
        dialog_container.classList.add(DialogBoxClasses.DialogContainer);
        dialog_infobox.classList.add(DialogBoxClasses.DialogInfoBox);
        dialog_timeline.classList.add(DialogBoxClasses.TimeLine);
        dialog_message.classList.add(DialogBoxClasses.Message);

        dialog_outer.appendChild(dialog_box);
        dialog_box.appendChild(dialog_container);
        dialog_box.appendChild(dialog_timeline);
        dialog_container.appendChild(dialog_infobox);
        dialog_container.appendChild(dialog_message);

        dialog_infobox.innerText = settings.dialog_type;
        dialog_message.innerText = settings.message;

        dialog_timeline.classList.add(DialogBoxClasses.TimeLineActive);

        // const timeline_animation_duration: number = +localStorage.getItem(LocalStorageKeys.DialogBox.TimeLineAnimationDuration);
        // const timeline_animation_duration: number = LocalStorage.getItem(LocalStorageKeys.DialogBox.TimeLineAnimationDuration, LocalStorage.ValueTypes.Number, 1.5);

        dialog_timeline.style.animationDuration = '1.5s';
        
    }
}

// <div class="dialog_box_outer">
//     <div class="dialog_box">
//         <div class="dialog_container">
//             <div class="dialog_infobox">Info</div>
//             <p class="dialog_message">Message</p>
//         </div>
        
//         <div class="dialog_time_line"></div>
//     </div>
// </div>