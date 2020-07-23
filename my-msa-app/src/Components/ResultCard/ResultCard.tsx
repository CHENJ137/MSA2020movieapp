import React from 'react';
import { Paper, Grid, Typography, Link } from '@material-ui/core';

// interface IResultCardProps {
//     Poster: string | undefined;
//     Description: string | undefined;
// }

function ResultCard() {
    return (
        <div>
            <Paper >
                <Grid container spacing={2}>
                    <Grid item>
                        <Link href="http://baidu.com" >
                            <img alt="complex" src="https://m.media-amazon.com/images/M/MV5BMzIxOTQyODU1OV5BMl5BanBnXkFtZTcwMDQ4Mjg4Nw@@._V1_SX300.jpg" />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Standard license
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Remove
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">$19.00</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default ResultCard;