import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

const DraggableMarquee = ({ children, speed = 40, direction = 'ltr' }) => {
    const [contentWidth, setContentWidth] = useState(0);
    const carouselRef = useRef(null);
    const controls = useAnimation();
    const x = useMotionValue(0);

    const childrenArray = Array.isArray(children) ? children : [children];
    // Create 4 sets to ensure smooth endless looping
    const content = [...childrenArray, ...childrenArray, ...childrenArray, ...childrenArray];

    const updateWidth = useCallback(() => {
        if (!carouselRef.current) return;
        // Total track size / 4 represents the exact length of one single children loop
        const measuredWidth = carouselRef.current.scrollWidth / 4;
        if (measuredWidth > 0 && measuredWidth !== contentWidth) {
            setContentWidth(measuredWidth);
        }
    }, [contentWidth]);

    useEffect(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);
        
        let observer = null;
        if (carouselRef.current && window.ResizeObserver) {
            observer = new ResizeObserver(updateWidth);
            observer.observe(carouselRef.current);
        }
        
        // Timeout to catch late-painting images if ResizeObserver fails
        const t = setTimeout(updateWidth, 300);

        return () => {
            window.removeEventListener('resize', updateWidth);
            if (observer) observer.disconnect();
            clearTimeout(t);
        };
    }, [updateWidth]);

    const startAnimation = useCallback(() => {
        if (contentWidth === 0) return;
        
        const currentX = x.get();
        const distance = direction === 'ltr' ? -contentWidth - currentX : contentWidth - currentX;
        const duration = speed * (Math.abs(distance) / contentWidth) || speed;
        
        controls.start({
            x: direction === 'ltr' ? -contentWidth : contentWidth,
            transition: {
                duration: duration,
                ease: 'linear',
                repeat: Infinity,
                repeatType: "loop"
            }
        });
    }, [contentWidth, direction, speed, controls, x]);

    useEffect(() => {
        if (contentWidth > 0) {
            startAnimation();
        }
    }, [contentWidth, startAnimation]);

    const handleDragStart = () => {
        controls.stop();
    };

    const handleDragEnd = (_, info) => {
        if (contentWidth === 0) return;
        const currentPosition = x.get();
        let newPosition = currentPosition % contentWidth;
        
        if (newPosition > 0 && direction === 'ltr') newPosition -= contentWidth;
        if (newPosition < 0 && direction === 'rtl') newPosition += contentWidth;
        
        x.set(newPosition);
        startAnimation();
    };

    return (
        <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing py-4 text-center">
            <motion.div
                ref={carouselRef}
                drag="x"
                dragConstraints={{ right: 0, left: 0 }}
                dragElastic={1}
                dragMomentum={true}
                dragTransition={{ bounceStiffness: 50, bounceDamping: 10, power: 0.8 }}
                style={{ x }}
                animate={controls}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onMouseEnter={() => controls.stop()}
                onMouseLeave={startAnimation}
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
