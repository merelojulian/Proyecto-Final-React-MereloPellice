import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from "@mui/material/Grid2";



function Media(props) {
    const { loading = false } = props;

    return (
        <Grid container wrap="nowrap">
            {(loading ? Array.from(new Array(7)) : data).map((item, index) => (
                <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                    {item ? (
                        <img
                            style={{ width: 210, height: 118 }}
                            alt={item.title}
                            src={item.src}
                        />
                    ) : (
                        <Skeleton variant="rectangular" width={210} height={118} />
                    )}
                    {item ? (
                        <Box sx={{ pr: 2 }}>
                            <Typography gutterBottom variant="body2">
                                {item.title}
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{ display: 'block', color: 'text.secondary' }}
                            >
                                {item.channel}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                {`${item.views} • ${item.createdAt}`}
                            </Typography>
                        </Box>
                    ) : (
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    )}
                </Box>
            ))}
        </Grid>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

export default function SkeletonCustom() {
    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Media loading />
        </Box>
    );
}
