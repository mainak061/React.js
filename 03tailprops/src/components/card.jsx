function Card({cardname, productimg=<>  <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
            
          /></>}) {
  return (
    <>
      <div
        className="flex flex-col rounded-xl  p-4"
        style={{
          border: "0.88px solid",

          backdropFilter: "saturate(180%) blur(14px)",
          background: " #ffffff0d",
        }}
      >
        <div>
          {productimg}
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{cardname}</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>100.00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;


