import React from 'react';
import { Typography, AppBar, Button, Card, CardAction, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, CardActions } from "@material-ui/core";
import { PhotoCamera } from '@material-ui/icons';
// import { createTheme, themeProvider } from '@mui/material/styles';

import useStyles from './styles';

const cards = [1,2,3,4,5,5,6,7,8,9];
const App = () => {

    const classes = useStyles();
    // const theme = createTheme();

    return (
      <>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                <PhotoCamera className={classes.icon}/>
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
                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                    Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                    </Typography>
                    <div className={classes.buttons}>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    See my photo
                                </Button> 
                                <Button variant="outlined" color="primary">
                                    Secondary action
                                </Button>
                                
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                  {cards.map((card) => (
                     <Grid item key={card} xs={12} sm={6} md={4} lg={4}>
                     <Card className={classes.card}>  
                       <CardMedia 
                         className={classes.cardMedia}
                         image="https://source.unsplash.com/random"
                         title="Image title"
                       />
                       <CardContent className={classes.cardContent}>
                         <Typography gutterBottom variant='h5'>
                         Heading
                         </Typography>
                         <Typography>
                         
                             This is a media card. You can use this section to describe the content.
                         </Typography>
                         <CardActions>
                             <Button size='small' color='primary'>View</Button>
                             <Button size='small' color='primary'>Edit</Button>

                         </CardActions>
                       </CardContent>
                     </Card>
                 </Grid>
                  ))}
                  </Grid>   
            </Container>
        </main>
        <footer className='footer'>
            <Typography variant='h6' align='center' gutterBottom>
                Footer 
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary'>
                Somethings here to give the footer a purpose!
            </Typography>
        </footer>
      </>
    )
        
}

export default App;