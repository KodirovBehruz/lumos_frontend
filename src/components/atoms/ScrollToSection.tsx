import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ScrollToSectionProps {
    sectionId: string;
    children: ReactNode;
}

const ScrollToSection: FC<ScrollToSectionProps> = ({ sectionId, children }) => {
    const navigate = useNavigate();

    const handleScroll = () => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <li onClick={handleScroll} style={{ cursor: "pointer" }}>
            {children}
        </li>
    );
};

export default ScrollToSection;