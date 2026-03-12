const SeprosLogo = ({ size = 40, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M50 5L60 40L40 40Z" fill="#4e77fc" />
        <path d="M95 50L60 60L60 40Z" fill="#4e77fc" opacity="0.9" />
        <path d="M50 95L40 60L60 60Z" fill="#4e77fc" opacity="0.8" />
        <path d="M5 50L40 40L40 60Z" fill="#4e77fc" opacity="0.7" />
        <path d="M82 18L60 40L75 35Z" fill="#4e77fc" opacity="0.6" />
        <path d="M18 18L40 40L25 35Z" fill="#4e77fc" opacity="0.5" />
        <path d="M82 82L60 60L75 65Z" fill="#4e77fc" opacity="0.4" />
        <path d="M18 82L40 60L25 65Z" fill="#4e77fc" opacity="0.3" />
    </svg>
);

export default SeprosLogo;
