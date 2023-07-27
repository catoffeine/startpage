
export enum EnginesAlias {
    google = 'google',
    duckduckgo = 'duckduckgo',
    brave = 'brave'
}

export enum DialogBoxClasses {
    Outer = 'dialog_box_outer',
    DialogBox = 'dialog_box',
    DialogInfoBox = 'dialog_infobox',
    DialogContainer = 'dialog_container',
    Message = 'dialog_message',
    TimeLine = 'dialog_time_line',
    TimeLineActive = DialogBoxClasses.TimeLine + '_active',
}

export namespace LocalStorageData {
    type LSType = {
        key: string,
        defaultvalue: string
    }

    const TimeLineAnimationDuration: LSType = {
        key: 'TimeLineAnimationDuration',
        defaultvalue: 1.5.toString()
    }


    export const LSKeys: Array<LSType> = [
        TimeLineAnimationDuration,
    ]
}

