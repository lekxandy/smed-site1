import { Jumbotron } from "react-bootstrap";
import Style from "./title-center.module.css";

export default function TitleCenter(props) {
  return (
    <Jumbotron className={Style.center}>
      <h1>{props.title}</h1>
    </Jumbotron>
  );
}
