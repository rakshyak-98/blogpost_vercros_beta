import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import material from "../../material";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setTheme} from "../../actions/theme";
import {useEffect} from "react";

interface MainFeaturedPostProps {
    post: {
        description: string;
        image: string;
        imageText: string;
        linkText: string;
        title: string;
    };
    darkTheme:boolean;
}


const MainFeaturedPost = (props: MainFeaturedPostProps) => {
    const { post , darkTheme} = props;

    useEffect(() => {

    }, [darkTheme]);

    function getLight() {
        return darkTheme ? material().dark : material().light;
    }
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${post.image})`,
            }}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color={getLight().onSecondary} gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography variant="h5" color={getLight().onSecondary} paragraph>
                            {post.description}
                        </Typography>
                        <Link variant="subtitle1" href="/blog/post1">
                            {post.linkText}
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

MainFeaturedPost.prototype = {
    darkTheme: PropTypes.bool.isRequired,
    setTheme: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    darkTheme: state.theme.darkTheme,
})

export default connect(mapStateToProps, setTheme)(MainFeaturedPost)