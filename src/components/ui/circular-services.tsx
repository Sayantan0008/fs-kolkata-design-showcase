"use client";

import React, {
    useEffect,
    useRef,
    useState,
    useMemo,
    useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Service {
    title: string;
    description: string;
    image: string;
    features?: (string | { text: string; link: string })[];
}

interface Colors {
    title?: string;
    description?: string;
    features?: string;
    arrowBackground?: string;
    arrowForeground?: string;
    arrowHoverBackground?: string;
}

interface FontSizes {
    title?: string;
    description?: string;
    features?: string;
}

interface CircularServicesProps {
    services: Service[];
    autoplay?: boolean;
    colors?: Colors;
    fontSizes?: FontSizes;
}

function calculateGap(width: number) {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;

    if (width <= minWidth) return minGap;
    if (width >= maxWidth)
        return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));

    return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularServices = ({
    services,
    autoplay = true,
    colors = {},
    fontSizes = {},
}: CircularServicesProps) => {
    // Color & font config
    const colorTitle = colors.title ?? "#D4AF37";
    const colorDescription = colors.description ?? "#E5E5E5";
    const colorFeatures = colors.features ?? "#B8B8B8";
    const colorArrowBg = colors.arrowBackground ?? "#141414";
    const colorArrowFg = colors.arrowForeground ?? "#D4AF37";
    const colorArrowHoverBg = colors.arrowHoverBackground ?? "#D4AF37";

    const fontSizeTitle = fontSizes.title ?? "2rem";
    const fontSizeDescription = fontSizes.description ?? "1.125rem";
    const fontSizeFeatures = fontSizes.features ?? "0.925rem";

    // State
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverPrev, setHoverPrev] = useState(false);
    const [hoverNext, setHoverNext] = useState(false);
    const [containerWidth, setContainerWidth] = useState(1200);

    const imageContainerRef = useRef<HTMLDivElement>(null);
    const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const servicesLength = useMemo(() => services.length, [services]);
    const activeService = useMemo(() => services[activeIndex], [activeIndex, services]);

    // Responsive gap calculation
    useEffect(() => {
        function handleResize() {
            if (imageContainerRef.current) {
                setContainerWidth(imageContainerRef.current.offsetWidth);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Autoplay
    useEffect(() => {
        if (autoplay) {
            autoplayIntervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % servicesLength);
            }, 5000);
        }

        return () => {
            if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
        };
    }, [autoplay, servicesLength]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
        // eslint-disable-next-line
    }, [activeIndex, servicesLength]);

    // Navigation handlers
    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % servicesLength);
        if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    }, [servicesLength]);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + servicesLength) % servicesLength);
        if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    }, [servicesLength]);

    // Compute transforms for each image (always show 3: left, center, right)
    function getImageStyle(index: number): React.CSSProperties {
        const gap = calculateGap(containerWidth);
        const maxStickUp = gap * 0.8;
        const isActive = index === activeIndex;
        const isLeft = (activeIndex - 1 + servicesLength) % servicesLength === index;
        const isRight = (activeIndex + 1) % servicesLength === index;

        if (isActive) {
            return {
                zIndex: 3,
                opacity: 1,
                pointerEvents: "auto",
                transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
                transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
            };
        }

        if (isLeft) {
            return {
                zIndex: 2,
                opacity: 1,
                pointerEvents: "auto",
                transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
                transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
            };
        }

        if (isRight) {
            return {
                zIndex: 2,
                opacity: 1,
                pointerEvents: "auto",
                transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
                transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
            };
        }

        // Hide all other images
        return {
            zIndex: 1,
            opacity: 0,
            pointerEvents: "none",
            transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
        };
    }

    // Framer Motion variants for content
    const contentVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <div className="service-container">
            <div className="service-grid">
                {/* Images with Navigation Buttons */}
                <div className="image-section">
                    <div className="image-container" ref={imageContainerRef}>
                        {services.map((service, index) => (
                            <img
                                key={service.image}
                                src={service.image}
                                alt={service.title}
                                className="service-image"
                                data-index={index}
                                style={getImageStyle(index)}
                            />
                        ))}
                    </div>

                    {/* Fixed Navigation Buttons */}
                    <div className="arrow-buttons">
                        <button
                            className="arrow-button prev-button"
                            onClick={handlePrev}
                            style={{
                                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
                            }}
                            onMouseEnter={() => setHoverPrev(true)}
                            onMouseLeave={() => setHoverPrev(false)}
                            aria-label="Previous service"
                        >
                            <FaArrowLeft size={28} color={hoverPrev ? "#000" : colorArrowFg} />
                        </button>
                        <button
                            className="arrow-button next-button"
                            onClick={handleNext}
                            style={{
                                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
                            }}
                            onMouseEnter={() => setHoverNext(true)}
                            onMouseLeave={() => setHoverNext(false)}
                            aria-label="Next service"
                        >
                            <FaArrowRight size={28} color={hoverNext ? "#000" : colorArrowFg} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="service-content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            variants={contentVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <h3
                                className="service-title"
                                style={{ color: colorTitle, fontSize: fontSizeTitle }}
                            >
                                {activeService.title}
                            </h3>

                            <motion.p
                                className="service-description"
                                style={{ color: colorDescription, fontSize: fontSizeDescription }}
                            >
                                {activeService.description.split(" ").map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{
                                            filter: "blur(10px)",
                                            opacity: 0,
                                            y: 5,
                                        }}
                                        animate={{
                                            filter: "blur(0px)",
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.22,
                                            ease: "easeInOut",
                                            delay: 0.025 * i,
                                        }}
                                        style={{ display: "inline-block" }}
                                    >
                                        {word}&nbsp;
                                    </motion.span>
                                ))}
                            </motion.p>

                            {activeService.features && (
                                <motion.div
                                    className="service-features"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {activeService.features.map((feature, i) => (
                                        <div key={i}>
                                            {typeof feature === 'string' ? (
                                                <div
                                                    style={{ color: colorFeatures, fontSize: fontSizeFeatures }}
                                                >
                                                    • {feature}
                                                </div>
                                            ) : (
                                                <Link to={feature.link}>
                                                    <motion.button
                                                        className="feature-button group"
                                                        style={{
                                                            color: colorFeatures,
                                                            fontSize: fontSizeFeatures,
                                                            backgroundColor: 'transparent',
                                                            border: `2px solid ${colorFeatures}`,
                                                            padding: '0.75rem 1.5rem',
                                                            borderRadius: '0.5rem',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease',
                                                            fontWeight: '600',
                                                            letterSpacing: '0.05em',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.5rem'
                                                        }}
                                                        whileHover={{
                                                            scale: 1.05,
                                                            backgroundColor: colorFeatures,
                                                            color: '#000'
                                                        }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.backgroundColor = colorFeatures;
                                                            e.currentTarget.style.color = '#000';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.backgroundColor = 'transparent';
                                                            e.currentTarget.style.color = colorFeatures;
                                                        }}
                                                    >
                                                        <span>{feature.text}</span>
                                                        <motion.div
                                                            initial={{ x: 0 }}
                                                            whileHover={{ x: 5 }}
                                                            transition={{
                                                                type: "spring",
                                                                stiffness: 400,
                                                                damping: 10
                                                            }}
                                                        >
                                                            <ArrowRight size={16} />
                                                        </motion.div>
                                                    </motion.button>
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <style jsx>{`
        .service-container {
          width: 100%;
          max-width: 56rem;
          padding: 2rem;
        }

        .service-grid {
          display: grid;
          gap: 5rem;
        }

        .image-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 24rem;
          perspective: 1000px;
          margin-bottom: 2rem;
        }

        .service-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .service-content {
          display: flex;
          flex-direction: column;
        }

        .service-title {
          font-weight: bold;
          margin-bottom: 1rem;
          font-family: 'Lucida Calligraphy', cursive;
        }

        .service-description {
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }

        .service-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .service-features > div {
          margin-bottom: 0.5rem;
          padding-left: 0.5rem;
        }

        .feature-button {
          display: inline-block;
          text-decoration: none;
        }

        .feature-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
        }

        .arrow-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        .arrow-button {
          width: 2.7rem;
          height: 2.7rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s;
          border: none;
        }

        @media (min-width: 768px) {
          .service-grid {
            grid-template-columns: 1fr 1fr;
          }
          .image-section {
            align-items: flex-start;
          }
          .arrow-buttons {
            justify-content: flex-start;
          }
        }
      `}</style>
        </div>
    );
};

export default CircularServices;