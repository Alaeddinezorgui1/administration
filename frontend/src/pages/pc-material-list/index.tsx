import React, { useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import { IPCMaterial } from "../../utils/interfaces";
import NavBar from "../../components/navbar";
function PcMaterialList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Define the async function to fetch data
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get("http://localhost:5000/material/");
        setData(response.data);
      } catch (err: any) {
        console.log(err?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar navbarComponentName={"Pc Material"} />
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        data.length && (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm: grid-col-2  grid-cols-1 gap-2">
            {data.map((item: IPCMaterial, index: number) => (
              <ProductCard pc={item} />
            ))}
          </div>
        )
      )}
    </div>
  );
}
export default PcMaterialList;
