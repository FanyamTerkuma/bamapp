import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import { PropTypes } from 'prop-types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
function Carousel({ children: slides, autoslide = false, autoslideInterval = 5000 }) {
    const [currentImage, setCurrentImage] = useState(0);

    const prev = () => {
        setCurrentImage((currentImage) => (currentImage === 0 ? slides.length - 1 : currentImage - 1));
    };
    const next = () => {
        setCurrentImage((currentImage) => (currentImage === slides.length - 1 ? 0 : currentImage + 1));
    };
    useEffect(() => {
        if (autoslide) {
            const slideInterval = setInterval(next, autoslideInterval);
            return () => clearInterval(slideInterval);
        }
    }, []);

    return (
        <div className="relative  overflow-hidden">
            <div className="mx-auto">
                <img className="h-screen w-full object-cover " src={slides[currentImage]} />
            </div>
            {/* make this content dynamic */}
            <div className="absolute inset-44  mx-auto flex h-fit flex-col gap-4 rounded bg-slate-200 bg-opacity-50 py-4 px-2  ">
                <p className="mono  text-xl font-light tracking-wide ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quis repudiandae, tempore reiciendis neque assumenda est sit beatae veritatis dolores
                    nulla ab. Quis, atque cum? Facere nulla suscipit corrupti alias excepturi eligendi deleniti pariatur. Asperiores, numquam. Dignissimos quidem eos vel.
                </p>
                <div className="mono">
                    <Button buttonName="Learn  more" />
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <FiChevronLeft onClick={prev} className="cursor-pointer rounded-full bg-slate-100 p-1 text-gray-800 shadow hover:bg-white" size={50} />
                <FiChevronRight onClick={next} className="cursor-pointer rounded-full bg-slate-100 p-1 text-gray-800 shadow hover:bg-white" size={50} />
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((slide, id) => (
                        <div key={id} className={`h-2 w-2 rounded-full bg-white transition-all ${currentImage === id ? 'p-[0.4em]' : 'bg-opacity-50'}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
Carousel.propTypes = {
    children: PropTypes.array,
    autoslide: PropTypes.boolean,
    autoslideInterval: PropTypes.integer
};
export default Carousel;
