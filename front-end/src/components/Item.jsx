import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://images.unsplash.com/photo-1584132869994-873f9363a562?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D"
        alt="Imagem da acomodação"
        className="aspect-square rounded-2xl object-cover"
      />

      <div >
        <h3 className="text-xl font-semibold ">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, iste?
          Accusamus consequatur sit quisquam explicabo obcaecati, praesentium
          repellendus placeat, dolorem dolor perspiciatis quidem omnis adipisci
          ipsa deleniti nihil totam illo.
        </p>
      </div>

      <p>
        <span className="font-semibold">R$ 550</span> por noite
      </p>
    </a>
  );
};

export default Item;
