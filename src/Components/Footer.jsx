import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
    {
        id: 1,
        icon: <AiFillGithub color='black' />,
        url: "https://github.com/jonaelghid3y?tab=repositories",
    },
    {
        id: 2,
        icon: <AiOutlineInstagram color='black'/>,
        url: "https://www.instagram.com/jona.ghid3y/",
    },
    {
        id: 3,
        icon: <AiFillLinkedin color="black" />,
        url: "https://www.linkedin.com/in/jonael-ghidey-51a780239/",
    },
];
;


function Footer() {


    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (


        <footer id="footer">
            {links.map(({ id, icon, url }) => (
                <motion.a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isVisible
                            ? { opacity: 1, y: 0, transition: { delay: id * 0.5 } }
                            : {}
                    }
                >
                    {icon}
                </motion.a>
            ))}

        </footer>


    )
}

export default Footer