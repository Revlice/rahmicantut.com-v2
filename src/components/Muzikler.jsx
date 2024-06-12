import Header from './Header.jsx';

const Muzikler = ()=>{

    return(
        <div className="bg-slate-950 w-full h-screen">
            <Header/>
            <div className="grid place-items-center sm:flex sm:flex-col bg-slate-950 w-full ">
                <ul className="grid grid-cols-3 sm:flex sm:flex-col  gap-28 mt-12 ">
                    <li style={{borderRadius: '12px', overflow: 'hidden'}}>
                        <iframe
                            style={{borderRadius: '12px'}}
                            src="https://open.spotify.com/embed/playlist/0Ki3HsF2xMS19sGjN7lkbL?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </li>
                    <li style={{borderRadius: '12px', overflow: 'hidden'}}>
                        <iframe
                            style={{borderRadius: '12px'}}
                            src="https://open.spotify.com/embed/playlist/3HwfiAAOAkNDrEVLo7kse6?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </li>
                    <li style={{borderRadius: '12px', overflow: 'hidden'}}>
                        <iframe
                            style={{borderRadius: '12px'}}
                            src="https://open.spotify.com/embed/playlist/1JYq7sAKTBW7Ad37rczxr1?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </li>
                </ul>


            </div>
        </div>

    )
};

export default Muzikler;
