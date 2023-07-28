import './styles.scss';
import './scripts/inputEngine';
import { DialogBox } from './scripts/dialogboxEngine';

'use strict';

document.getElementById('testbutton').addEventListener('click', () => {
    DialogBox.create_dialogbox({
        message: 'Fsjfsgjlsjglsjgsjgsgjsgjsgjsgjsgjsgjsjgsjgsjg',
        dialog_type: DialogBox.DialogType.Info,
        life_time: 5
    });
});
