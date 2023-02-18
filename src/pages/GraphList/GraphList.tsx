import { Header } from "components/Header";
import { graphListStyles } from "pages/GraphList";

/**
 * List of saved graphs
 */
export const GraphList = () => {
  const classes = graphListStyles();
  return (
    <>
      <Header />
      <div id="graph-list" className={classes.root}>
        Graph List
      </div>
    </>
  );
};

export default GraphList;
