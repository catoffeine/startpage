namespace DialogBox {
    enum DialogType {
        Info,
        Error
    }

    class Dialog {
        life_time: number;
        dialog_type: DialogType = DialogType.Info;
        message: string;

        constructor(life_time: number, message: string, dialog_type?: DialogType, show?: boolean) {
            this.life_time = life_time;
            this.message = message;
            this.dialog_type = dialog_type || this.dialog_type;

            if (show) {
                this.show();
            }
        }

        show() {
            let dialog_object: HTMLDivElement = document.createElement('div');
            dialog_object.classList.add('')
        }

    }
}