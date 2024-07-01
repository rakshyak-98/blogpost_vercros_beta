import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import material from "../../material";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {useEffect} from "react";
import {setTheme} from "../../actions/theme";
import IconButton from "@mui/material/IconButton";
import {ViewDay} from "@mui/icons-material";


export const FeaturedPost = ({
                                 post: {date, description, image, imageLabel, title},
                                 darkTheme,
                                 setTheme
                             }) => {

    useEffect(() => {
        setTheme();
    }, [setTheme]);

    function getLight() {
        return material().dark;
    }

    return (
        <Grid item xs={12} md={6}>
            <IconButton onClick={(e) => {
                return setTheme(darkTheme);
            }}>
                <ViewDay/>
            </IconButton>
            <CardActionArea component="a" href="/blog/post2">
                <Card sx={{display: 'flex'}}>
                    <CardContent sx={{flex: 1, background: `${getLight().primaryContainer}`}}>
                        <Typography component="h2" variant="h5" color={getLight().onPrimaryContainer}>
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color={getLight().onPrimaryContainer}>
                            {date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph color={getLight().onPrimaryContainer}>
                            {description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            Continue reading...
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{width: 160, display: {xs: 'none', sm: 'block'}}}
                        image={image}
                        alt={imageLabel}
                    />
                </Card>
            </CardActionArea>
        </Grid>
    );
}
FeaturedPost.propTypes = {
    setTheme: PropTypes.func.isRequired,
    darkTheme: PropTypes.bool,
}
const mapStateToProps = (state) => ({
    darkTheme: state.darkTheme,
})

export default connect(mapStateToProps, {setTheme})(FeaturedPost)