import { makeStyles } from '@material-ui/core';
import { CardContainer, Hero, Navbar } from './components';

const useStyles = makeStyles(theme => ({
  app: {
    margin: 0,
    textAlign: 'center',
    background: '#222121',
    minHeight: '100vh',
    color: theme.palette.primary.main
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Navbar />
      <Hero />
      <CardContainer />
    </div>
  );
}

export default App;
