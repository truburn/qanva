import { Header } from "components/Header";
import { graphEditorStyles } from "pages/GraphEditor";

/**
 * Graph editor page
 */
export const GraphEditor = () => {
  const classes = graphEditorStyles();
  return (
    <>
      <Header />
      <div id="graph-editor" className={classes.root}>
        Graph Editor
      </div>
    </>
  );
};

export default GraphEditor;
