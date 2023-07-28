
export enum EnginesAlias {
    google = 'google',
    duckduckgo = 'duckduckgo',
    brave = 'brave'
}

export enum DialogBoxClasses {
    Main = 'dialogbox_list',
    Outer = 'dialog_box_outer',
    DialogBox = 'dialog_box',
    DialogInfoBox = 'dialog_infobox',
    DialogContainer = 'dialog_container',
    Message = 'dialog_message',
    TimeLine = 'dialog_time_line',
    TimeLineActive = DialogBoxClasses.TimeLine + '_active',
    FadeIn = 'dialog_box_fadein',
    FadeOut = 'dialog_box_fadeout'
}

export enum LSKeys {
    TimeLineAnimationDuration = 'TimeLineAnimationDuration',
}


export const LSDefaultValues: { [key in LSKeys]?: string } = {
    [LSKeys.TimeLineAnimationDuration]: 1.5.toString(),
}