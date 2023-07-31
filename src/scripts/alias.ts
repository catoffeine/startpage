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
    DialogBoxColors = 'DialogBoxColors'
}


export const LSDefaultValues: { [key in LSKeys]?: string } = {
    [LSKeys.TimeLineAnimationDuration]: 2.5.toString(),
    [LSKeys.DialogBoxColors]: JSON.stringify({
        info: {
            bgcolor: '#678D48',
            timelinecolor: '#95C884',
            infoboxcolor: '#759C57',
            textcolor: '#ffffff'
        },
        error: {
            bgcolor: '#933E3E',
            timelinecolor: '#D66D6D',
            infoboxcolor: '#A44949',
            textcolor: '#FFFFFF'
        }
    }),
}