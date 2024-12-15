import CardInfo from "./components/CardInfo/CardInfo"
import React from "react";
import { productsData } from "./datas/productsData";


const ProductSection: React.FC = () => {
  return(
    <div className="flex p-5 gap-10">
      {productsData.map((product, index)=> (
        <CardInfo 
        key = {index}
        newPrice={product.newPrice}
        oldPrice={product.oldPrice}
        button ={product.button}
        description={product.desciption}
        imagePath={product.imagePath}
        />
      ))}
    </div>
  );
};


const App: React.FC = () => {

  return(
    <div className="flex flex-col justify-center items-center">
      <ProductSection/>
    </div>
  )
}
export default App; 
