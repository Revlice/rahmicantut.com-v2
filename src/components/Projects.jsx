import Header from "./Header.jsx";
import { motion } from "framer-motion";
import { useState } from "react";
import greenbean from '../assets/projects/greenbean.png';
import greenbean2 from '../assets/projects/greenbean2.png';
import greenbean3 from '../assets/projects/greenbean3.png';
import greenbean4 from '../assets/projects/greenbean4.png';
import greenbean5 from '../assets/projects/greenbean5.png';
import greenbean6 from '../assets/projects/greenbean6.png';
import revUpload from '../assets/projects/revupload.png';
import trackmysubs from '../assets/projects/trackmysubs.png';
import trackmysubs2 from '../assets/projects/trackmysubs2.png';
import trackmysubs3 from '../assets/projects/trackmysubs3.png';
import trackmysubs4 from '../assets/projects/trackmysubs4.png';
import trackmysubs5 from '../assets/projects/trackmysubs5.png';
import trackmysubs6 from '../assets/projects/trackmysubs6.png';
import trackmysubs7 from '../assets/projects/trackmysubs7.png';
import trackmysubs8 from '../assets/projects/trackmysubs8.png';
import trackmysubs9 from '../assets/projects/trackmysubs9.png';

const projectData = [
    {
        title: "GreenBean Coffee",
        description: "Bu proje, React, TailwindCSS, Node.js, Express.js ve MongoDB kullanarak geliştirilmiş bir web uygulamasıdır. Ayrıca kafenin sadece menüsü değil, sahibinin ürünleri güncelleyebileceği ve ekleyebileceği bir admin paneli de oluşturulmuştur.",
        link: "https://github.com/Revlice/greenbean-coffee",
        images: [
            greenbean, greenbean2, greenbean3, greenbean4, greenbean5, greenbean6
        ],
    },
    {
        title: "Track My Subs",
        description: "MongoDB, Node.js, Express.js, TailwindCSS ve React kullanarak yapılan bir abonelikleri takip etmek amacıyla yapılmış bir web uygulaması.",
        link: "https://github.com/Revlice/track-my-subs",
        images: [
            trackmysubs, trackmysubs2, trackmysubs3, trackmysubs4, trackmysubs5, trackmysubs6, trackmysubs7, trackmysubs8, trackmysubs9,
        ],
    },
    {
        title: "revUpload",
        description: "Firebase, MERN ve TailwindCSS kullanarak yapılmış bir video yükleme sitesi.",
        link: "https://github.com/Revlice/revUpload_2.1",
        images: [
            revUpload
        ],
    },
];

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({ images: [], currentIndex: 0, title: "", description: "" });

    const openModal = (images, currentIndex, title, description) => {
        setModalData({ images, currentIndex, title, description });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = () => {
        setModalData((prevState) => ({
            ...prevState,
            currentIndex: (prevState.currentIndex + 1) % prevState.images.length
        }));
    };

    const prevImage = () => {
        setModalData((prevState) => ({
            ...prevState,
            currentIndex: prevState.currentIndex === 0 ? prevState.images.length - 1 : prevState.currentIndex - 1
        }));
    };

    return (
        <div className="bg-slate-950 min-h-screen w-full">
            <Header />
            <motion.div
                className="w-full flex flex-col items-center py-12 px-4 lg:px-32 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-center">Projelerim</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                    {projectData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Image Slider */}
                            <ImageSlider
                                images={project.images}
                                title={project.title}
                                description={project.description}
                                openModal={openModal}
                            />
                            <div className="p-6">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4">{project.title}</h2>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-customCyan font-semibold hover:underline"
                                >
                                    GitHub Repo
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden shadow-lg">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-black text-3xl font-bold z-50"
                        >
                            &times;
                        </button>
                        <div className="w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center relative">
                            <img
                                src={modalData.images[modalData.currentIndex]}
                                alt={`Proje Resmi ${modalData.currentIndex + 1}`}
                                className="w-full h-full object-contain"
                            />

                            {modalData.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 bg-customCyan transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
                                    >
                                        &#9664;
                                    </button>

                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform bg-customCyan -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
                                    >
                                        &#9654;
                                    </button>
                                </>
                            )}
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">{modalData.title}</h2>
                            <p className="text-gray-600 text-center">{modalData.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// ImageSlider Bileşeni
const ImageSlider = ({ images, title, description, openModal }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = (e) => {
        e.stopPropagation(); // Modal açılmasını engelle
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation(); // Modal açılmasını engelle
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div
            className="relative w-full h-48 sm:h-64 lg:h-48 overflow-hidden cursor-pointer"
            onClick={() => openModal(images, currentIndex, title, description)}
        >
            <img
                src={images[currentIndex]}
                alt={`Proje Resmi ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-300"
            />
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
                    >
                        &#9664;
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
                    >
                        &#9654;
                    </button>
                </>
            )}
        </div>
    );
};

export default Projects;
