import * as React from "react";
import Button from "@material-ui/core/Button";

export interface IAppProps {}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello world
        </Button>
      </div>
    );
  }
}
