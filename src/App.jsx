import React from 'react';
import { Typography, AppBar, Button, Card, CardAction, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { PhotoCamera } from '@mui/icons-material';
import { makeStyles } from '@material-ui/styles';
import { createTheme, themeProvider } from '@mui/material/styles';
import { color } from '@mui/system';
// import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        backgroundColor: 'backgroundColor.paper',
        padding: 'spacing(28, 0, 6)',
        color: 'red'
    }
})

const App = () => {

    const classes = useStyles();
    const theme = createTheme();

    return (
      <themeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                <PhotoCamera />
                <Typography variant='h6'>
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant='h5' align='center' color= {classes.container} paragraph>
                    Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                    </Typography>
                    <div>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item>
                                <Button variant='contained' color="primary">
                                    See my photo
                                </Button>
                                <Button variant='outlined' color="primary">
                                    Secondary action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </main>
      </themeProvider>
    )
        
}

export default App;