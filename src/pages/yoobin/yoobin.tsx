// src/App.js
import Badge from "@/components/yoobin/Badge";
import { ReactComponent as MoveOffIcon } from "@/assets/icons/movie-off.svg";
import Treeview from "@/components/yoobin/Treeview";
import TestSidebar from "@/components/yoobin/TestForCss/TestSidebar";
import TestTopbar from "@/components/yoobin/TestForCss/TestTopbar";
import TestLayout from "@/components/yoobin/TestForCss/TestLayout";

function YoobinPage() {
  return (
    <div className="App" style={{width: "100%", height: "100%"}}>
      {/* <div style={{display: "flex", flexDirection:"column", gap: "8px"}}>
        <Badge label="Badge" variant="light" size="s" color="primary" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="light" size="s" color="neutrals" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="light" size="s" color="success" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="light" size="s" color="info" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="light" size="s" color="warning" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="light" size="s" color="error" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="light" size="s" color="gray" isDot={true} icon={<MoveOffIcon />} />
      </div> */}
      {/* <Treeview /> */}
      <TestLayout />
    </div>
  );
}

export default YoobinPage;
