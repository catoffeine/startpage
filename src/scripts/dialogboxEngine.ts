import { DialogBoxClasses, LSKeys } from "./alias"
import { LStorage } from "./localStorage"


export namespace DialogBox {

    class DialogTimer {
        dialog_timeline: HTMLDivElement;

        seconds: number;
        fn: () => Promise<void>;

        is_stopped: boolean = false;

        constructor(fn: () => Promise<void>, dialog_timeline: HTMLDivElement, seconds?: number, ) {
            this.seconds = seconds || 2;
            this.dialog_timeline = dialog_timeline;
            this.fn = fn;
        }

        async delay(n: number) {
            return new Promise((resolve) => {
                setTimeout(resolve, n*1000);
            });
        }

        async update() {
            if (!document.body.contains(this.dialog_timeline)) return;

            let is_paused: boolean = this.dialog_timeline.style.animationPlayState == 'paused';
            
            while (is_paused) {
                is_paused = this.dialog_timeline.style.animationPlayState == 'paused';
                await this.delay(0.05);
            }
        
            this.seconds -= (10 / 1000);

            if (this.seconds <= 0) {
                await this.fn(); 
                return;
            }

            await this.delay(10 / 1000);
            await this.update();
        }

        async start() {
            await this.update();
        }
    }

    export enum DialogType {
        Info = 'Info',
        Error = 'Error'
    }

    type DialogSettings = {
        message: string,
        dialog_type?: DialogType,
        life_time?: number
    }

    export const create_dialogbox = async (settings: DialogSettings) => {
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

        const timeline_animation_duration: number = LStorage.getItem(LSKeys.TimeLineAnimationDuration, LStorage.LSTypes.Number);
        dialog_timeline.style.animationDuration = timeline_animation_duration.toString() + 's';
        dialog_outer.classList.toggle(DialogBoxClasses.FadeIn);

        dialog_box.addEventListener('mouseenter', () => {
            document.querySelectorAll('.' + DialogBoxClasses.TimeLine).forEach(element => {
                (<HTMLDivElement>element).style.animationPlayState = 'paused';
            });
        })

        dialog_box.addEventListener('mouseleave', () => {
            document.querySelectorAll('.' + DialogBoxClasses.TimeLine).forEach(element => {
                (<HTMLDivElement>element).style.animationPlayState = 'running';
            });
        })

        document.querySelector('.' + DialogBoxClasses.Main).appendChild(dialog_outer);
        

        const dt = new DialogTimer(async () => {
            dialog_outer.classList.toggle(DialogBoxClasses.FadeIn);
            dialog_outer.classList.toggle(DialogBoxClasses.FadeOut);

            const dtt = new DialogTimer(async () => {
                document.querySelector('.' + DialogBoxClasses.Main).removeChild(dialog_outer);
            }, dialog_timeline, 0.5);

            await dtt.start();
        }, dialog_timeline, timeline_animation_duration);

        await dt.start();
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