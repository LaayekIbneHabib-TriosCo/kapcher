import { useStateContext } from "../../../context/ContextProvider";
import Rows from "../../../components/Rows/Rows";
import Data from "./Data/Data";
import Form from "../../../components/Form/Form";

export default function Camera() {
  const { isClicked, setIsClicked } = useStateContext();

  return (
    <>
      {isClicked && (
        <Rows
          click={() => setIsClicked((prev) => !prev)}
          title={["Serial Number", "Camera Name", "RTSP", "Start Time", "Stop Time"]}
          data={Data}
        />
      )}
      {!isClicked && (
        <Form
          click={() => setIsClicked((prev) => !prev)}
          purpose="Camera settings"
          input={["Camera name", "URL"]}
          type="date"
          date={["Start date", "End date"]}
        />
      )}
    </>
  );
}
