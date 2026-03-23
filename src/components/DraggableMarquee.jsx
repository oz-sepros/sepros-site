import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

const DraggableMarquee = ({ children, speed = 40, direction = 'rtl' }) => {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef(null);
    const controls = useAnimation();
    const x = useMotionValue(0);

    // Duplicate children to ensure seamless loop
    const childrenArray = Array.isArray(children) ? children : [children];
    // Create 3 sets so it fills the screen and has enough content to loop
    // Ensure we spread the array of nodes correctly inside the track
    const content = [...childrenArray, ...childrenArray, ...childrenArray, ...childrenArray];

    useEffect(() => {
        if (!carouselRef.current) return;
        // Total width of the track to know when to loop back
        setWidth(carouselRef.current.scrollWidth / 4);
    }, [children]);

    const startAnimation = () => {
        const currentX = x.get();
        const distance = direction === 'ltr' ? -width - currentX : width - currentX;
        
        controls.start({
            x: direction === 'ltr' ? -width : width,
            transition: {
                duration: speed * (Math.abs(distance) / width) || speed, 
                ease: 'linear',
                repeat: Infinity,
                repeatType: "loop"
            }
        });
    };

    useEffect(() => {
        if (width > 0) {
            startAnimation();
        }
    }, [width, direction, speed]);

    const handleDragStart = () => {
        controls.stop();
    };

    const handleDragEnd = (_, info) => {
        // Calculate the new duration based on remaining distance to keep speed constant
        const currentPosition = x.get();
        // If dragged past boundary, reset taking modulo
        let newPosition = currentPosition % width;
        if (newPosition > 0 && direction === 'ltr') newPosition -= width;
        if (newPosition < 0 && direction === 'rtl') newPosition += width;
        
        x.set(newPosition);
        startAnimation();
    };

    return (
        <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing py-4 text-center">
            <motion.div
                ref={carouselRef}
                drag="x"
                dragConstraints={{ right: 0, left: 0 }} // Let it drag freely
                dragElastic={1} // Prevents resistance when dragging
                dragMomentum={true} // Add natural momentum
                dragTransition={{ bounceStiffness: 50, bounceDamping: 10, power: 0.8 }} // Make swipe smoother and faster
                style={{ x }}
                animate={controls}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                // Optional: stop on hover
                onMouseEnter={() => controls.stop()}
                onMouseLeave={() => startAnimation()}
                className={`flex w-max items-center gap-10 md:gap-20 px-4 md:px-10 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}
            >
                {content.map((child, i) => (
                    <div key={i} className="flex-shrink-0">
                        {child}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default DraggableMarquee;
