
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import Referrals from './components/Referrals';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const elements = document.querySelectorAll('.fade-in-section');
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="bg-white text-autonest-dark overflow-x-hidden">
            <style>
            {`
                .fade-in-section {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                }
                .fade-in-section.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .prose {
                    line-height: 1.75;
                }
                .prose h3 {
                    margin-bottom: 0.5rem;
                    margin-top: 1.5rem;
                }
            `}
            </style>
            <Header onRegisterClick={openModal} />
            <main>
                <Hero onRegisterClick={openModal} />
                <Features />
                <Gallery />
                <Process />
                <Testimonials />
                <Pricing onRegisterClick={openModal} />
                <Guarantee />
                <Referrals />
            </main>
            <Footer />
            {isModalOpen && <RegistrationModal onClose={closeModal} />}
            <ChatWidget />
        </div>
    );
};

export default App;