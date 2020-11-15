import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import Header from "../Header/Header";
import {Typography} from "@material-ui/core";
import ListFiles from "../ListFiles/ListFiles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: 200,
        [theme.breakpoints.up('md')]: {
            width: 300
        },
        flexShrink: 0,
    },
    drawerPaper: {
        width: 200,
        [theme.breakpoints.up('md')]: {
            width: 300
        },
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        fontSize: '20px',
    },
    drawerFooter: {
        width: 200 - 1,
        [theme.breakpoints.up('md')]: {
            width: 300 - 1
        },
        position: 'absolute',
        bottom: 0,
    },
    content: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -200,
        [theme.breakpoints.up('md')]: {
            marginLeft: -300
        },
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const DrawerComponent = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <div className={classes.drawerHeader}>
                    <Typography variant={'h6'}>
                        Fichiers
                    </Typography>
                    <IconButton onClick={(handleDrawerClose)}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {['Tous les fichiers', 'Favoris'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <FolderOpenIcon/> : <FavoriteIcon/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {["Faire une liste des différents dossier de l'utilisateur"].map((text) => (
                        <ListItem button key={text}>
                            <ListItemIcon> <FolderIcon/> </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
                <div className={classes.drawerFooter}>
                    <Divider/>
                    <List>
                        {["Fichiers supprimés", "Paramètres"].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <DeleteOutlineIcon/> : <SettingsIcon/>}</ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                        ))}
                    </List>
                </div>

            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <Header
                    open={open}
                    setOpen={(o) => setOpen(o)}
                    anchorEl={anchorEl}
                    setAnchorEl={(a) => setAnchorEl(a)}
                    mobileMoreAnchorEl={mobileMoreAnchorEl}
                    setMobileMoreAnchorEl={(m) => setMobileMoreAnchorEl(m)}
                />
                <ListFiles/>
            </main>
        </div>
    );
}

export default DrawerComponent;