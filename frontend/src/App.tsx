import React, { useState } from "react";
import User from "./pages/user";
import PcMaterial from "./pages/pcMaterial";
import AddPCMaterialForm from "./pages/editPcMaterial";
import PcMaterialList from "./pages/pc-material-list";

const App: React.FC = () => {
  return (
    <div className="h-full w-full">
      <PcMaterialList />
    </div>
  );
};

export default App;
