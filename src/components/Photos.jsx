import macbook from '../assets/photos/apple-macbook-air-2020-space-grey-01-800x800.webp';
import airpods from '../assets/photos/png-transparent-airpods-pro-thumbnail.png';
import mouse from '../assets/photos/77828084.webp';
import keyboard from '../assets/photos/redragon.webp';
import monitor from '../assets/photos/james-donkey-jd27fg1ms144.webp';
import hub from '../assets/photos/519Rghx_5eL1.webp';


const Photos = ()=>{
    const photos = [
        {src:macbook, name:'MacBook Air M1 16GB' },
        {src:monitor, name:'James Donkey 1MS 144HZ' },
        {src:keyboard, name:'Redragon K552' },
        {src:mouse, name:'Razer Deathadder Essential White ' },
        {src:hub, name:'Çoklu Type-C Dönüştürücü' },
        {src:airpods, name:'Airpods Pro' }
        
        
    ]

    return(
        <div className="grid items-center grid-cols-3 ml-[9.5rem] gap-y-12 gap-x-[200px]  rounded-md mb-64">
            {photos.map((item,index)=>(
                <div className="flex flex-col text-white border-2 border-blue-300/30  justify-center w-[30rem] h-[30rem] items-center">
                    <h1 className="text-xl"> {item.name} </h1>
                    <img className="w-64" src={item.src} alt="photos"/>
                </div>
            ))}
        </div>
    )
};

export default Photos;
