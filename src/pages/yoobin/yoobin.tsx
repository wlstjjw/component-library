// src/App.js
import Badge from "@/components/yoobin/Badge";
import { ReactComponent as MoveOffIcon } from "@/assets/icons/movie-off.svg";

function YoobinPage() {
  return (
    <div className="App" style={{display: "flex", gap: "8px"}}>
      <div style={{display: "flex", flexDirection:"column", gap: "8px"}}>
        <Badge label="Badge" variant="light" size="s" color="primary" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="light" size="s" color="neutrals" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="light" size="s" color="success" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="light" size="s" color="info" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="light" size="s" color="warning" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="light" size="s" color="error" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="light" size="s" color="gray" isDot={true} icon={<MoveOffIcon />} />
      </div>
      <div style={{display: "flex", flexDirection:"column", gap: "8px"}}>
        <Badge label="Badge" variant="outlined" size="s" color="primary" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="outlined" size="s" color="neutrals" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="outlined" size="s" color="success" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="outlined" size="s" color="info" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="outlined" size="s" color="warning" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="outlined" size="s" color="error" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="outlined" size="s" color="gray" isDot={true} icon={<MoveOffIcon />} />
      </div>
      <div style={{display: "flex", flexDirection:"column", gap: "8px"}}>
        <Badge label="Badge" variant="filled" size="s" color="primary" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="filled" size="s" color="neutrals" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="filled" size="s" color="success" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="filled" size="s" color="info" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="filled" size="s" color="warning" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="filled" size="s" color="error" isDot={true} icon={<MoveOffIcon />} />
        <Badge label="Badge" variant="filled" size="s" color="gray" isDot={true} icon={<MoveOffIcon />} />
      </div>
      <div style={{display: "flex", flexDirection:"column", gap: "8px"}}>
        <Badge label="Badge" variant="dot" size="s" color="primary"/>
        <Badge label="Badge" variant="dot" size="s" color="neutrals"/>
        <Badge label="Badge" variant="dot" size="s" color="success"/>
        <Badge label="Badge" variant="dot" size="s" color="info"/>
        <Badge label="Badge" variant="dot" size="s" color="warning"/>
        <Badge label="Badge" variant="dot" size="s" color="error"/>
        <Badge label="Badge" variant="dot" size="s" color="gray"/>
      </div>
    </div>
  );
}

export default YoobinPage;
