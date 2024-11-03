import React from "react";
import data from "../../data/data.json";

const Gallery = () => {
    return (
        <section id="gallery" className="py-10 px-5 bg-gray-100">
            <div className="max-w-screen-lg mx-auto">
                <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
                    Galería
                </h2>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {data.gallery.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
