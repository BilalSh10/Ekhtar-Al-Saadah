import classes from './Loading.module.css';

function Loading() {
  return (
    <div>
      <div className={classes.ring}>Loading
        <span className={classes.s}></span>
      </div>
    </div>
  );
}

export default Loading;