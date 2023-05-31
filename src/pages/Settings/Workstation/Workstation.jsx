import { useStateContext } from "../../../context/ContextProvider";
import Rows from "../../../components/Rows/Rows";
import Data from "./Data/Data";
import Form from "../../../components/Form/Form";

export default function Workstation() {
  const { isClicked, setIsClicked } = useStateContext();

  return (
    <>
      {isClicked && (
        <Rows
          click={() => setIsClicked((prev) => !prev)}
          title={["Serial Number", "Workstation Name", "Camera Name", "Workstation Type"]}
          data={Data}
        />
      )}
      {!isClicked && (
        <Form
          click={() => setIsClicked((prev) => !prev)}
          purpose="Add a Workstation"
          input={["Workstation Name"]}
          dropdown={["Select your role", "Admin", "Security", "Packer"]}
        />
      )}
    </>
  );
}
