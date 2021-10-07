import { makeStyles } from '@material-ui/core';
import { CardContainer, Hero, Navbar } from './components';

const useStyles = makeStyles(theme => ({
  app: {
    textAlign: 'center',
    background: '#222121',
    minHeight: '100vh'
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
