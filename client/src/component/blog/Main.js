import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import {connect} from "react-redux";
import {getBlogById} from "../../actions/post";
import {useEffect} from "react";

function Main(props) {
    const {posts, title,id, description} = props;

    useEffect(() => {
        getBlogById(id)
    }, []);

    return (
        <Grid item xs={12} md={8}
              sx={{
                  '& .markdown': {
                      py: 3,
                  },
              }}
        >
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Divider/>
            <Markdown className="markdown">
                {description}
            </Markdown>
        </Grid>
    );
}

Main.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    getBlogById: state.post.getBlogById,
})

export default  connect(mapStateToProps,{getBlogById})(Main);