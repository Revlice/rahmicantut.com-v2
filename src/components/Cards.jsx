


const Cards = ({title,icons})=>{

    return(
        <div className="border-4 sm:mt-24  border-blue-300/30 justify-center rounded-lg items-center w-full flex-col p-10 shadow-blue-300/30  shadow-2xl" >
            <h1 className="font-bold text-xl p-12 text-center sm:w-full ">
                Sosyal Medyalar!
            </h1>
            <h2 className="text-lg font-medium p-12 text-center sm:w-full ">
                {title}
            </h2>
            <h3 className="text-5xl hover:opacity-70 cursor-pointer p-12  flex justify-center items-center sm:w-full">
                {icons}
            </h3>
        </div>
    )
};


export default Cards;
