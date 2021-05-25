import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => {
//     return {
//         container: {
//             marginTop: theme.spacing(15),
//             marginBottom: theme.spacing(30),
//             display: 'flex',
//             position: 'relative',
//         },
//         curvyLines: {
//             pointerEvents: 'none',
//             position: 'absolute',
//             top: -180,
//         },
//         root: {
//             display: 'flex',
//             overflow: 'hidden',
//         },
//     }
// })


const SearchView = () => {
    // hook for using custom classes
    // const classes = useStyles();
    return (
        // <section className={classes.root}>
        //     <Container className={classes.container}>
        //         <img
        //             src="./appCurvyLines.png"
        //         />
        //     </Container>
        // </section>
        <img src='./appCurvyLines.png' />
    );
}

export default SearchView;