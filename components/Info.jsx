import React from "react";

const Info = () => {
  const infos = [
    {
      id: 1,
      name: "cartões e pix",
      info: "Aceitamos cartões e pix.",
      image: "/assets/creditcard.png",
    },
    {
      id: 2,
      name: "fast delivery",
      info: "Entregas até 50 minutos.",
      image: "/assets/delivery.png",
    },
    {
      id: 3,
      name: "Pedidos online",
      info: "",
      image: "/assets/booking.png",
    },
    {
      id: 4,
      name: "Boa localização",
      info: "Espaço reservado para sua família",
      image: "/assets/location.png",
    },
  ];

  return (
    <section className="w-full mt-10 flex justify-center ">
      <div className=" h-auto grid grid-cols-2 sm:flex gap-x-5  gap-y-5 mt-20 ">
        {infos.map((info) => (
          <div
            key={info.id}
            className="w-[150px] h-[160px] lg:w-[200px] lg:h-[230px] flex flex-col items-center justify-center bg-white rounded-xl p-2"
          >
            <img src={info.image} className="w-[35%]" />
            <h1 className="text-details font-semibold text-[15px]">
              {info.name}
            </h1>
            <h2 className="text-[13px] font-medium text-center">{info.info}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
