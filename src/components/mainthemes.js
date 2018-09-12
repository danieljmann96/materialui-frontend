export default {
    mainstyles : theme => ({
        root: {
            flexGrow: 1,
        },
        appFrame: {
            height: 440,
            zIndex: 1,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            width: '100%',
        },
        appBar: {
            width: `calc(100% - ${240}px)`,
        },
        'appBar-left': {
            marginLeft: 240,
        },
        'appBar-right': {
            marginRight: 240,
        },
        drawerPaper: {
            position: 'relative',
            width: 240,
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing.unit * 3,
        },
    })
}
