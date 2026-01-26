"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        
        // Close mobile menu
        setIsMenuOpen(false);
        
        if (sectionId === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState({}, '', '/');
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Remove hash from URL after scrolling
                setTimeout(() => {
                    window.history.pushState({}, '', '/');
                }, 100);
            }
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-60 transition-all duration-300 ${
                isMenuOpen 
                    ? 'bg-black border-b border-white/10' 
                    : 'border-b border-border bg-background/70 dark:bg-background/70 backdrop-blur-md'
            }`}>
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                    <Link href="/" className={`text-xl font-bold tracking-normal transition-colors ${
                        isMenuOpen ? 'text-white' : 'text-foreground dark:text-white'
                    }`}>
                        THE GREEN CANDLE
                    </Link>
                
                {/* Desktop Menu */}
                <div className="hidden space-x-6 md:flex">
                    <Link href="/" className="text-sm font-medium text-foreground dark:text-white hover:text-primary transition-colors" onClick={(e) => handleNavClick(e, '/')}>
                        Home
                    </Link>
                    <Link href="/#features" className="text-sm font-medium text-foreground dark:text-white hover:text-primary transition-colors" onClick={(e) => handleNavClick(e, 'features')}>
                        Features
                    </Link>
                    <Link href="/#about" className="text-sm font-medium text-foreground dark:text-white hover:text-primary transition-colors" onClick={(e) => handleNavClick(e, 'about')}>
                        About
                    </Link>
                    <Link href="/#pricing" className="text-sm font-medium text-foreground dark:text-white hover:text-primary transition-colors" onClick={(e) => handleNavClick(e, 'pricing')}>
                        Pricing
                    </Link>
                    <Link href="/#contact" className="text-sm font-medium text-foreground dark:text-white hover:text-primary transition-colors" onClick={(e) => handleNavClick(e, 'contact')}>
                        Contact
                    </Link>
                </div>

                {/* Hamburger Menu Button - Mobile Only */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="relative z-60 flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                                isMenuOpen ? 'bg-white rotate-45 translate-y-1.5' : 'bg-foreground dark:bg-white'
                            }`}
                        />
                        <span
                            className={`block w-6 h-0.5 transition-all duration-300 ease-in-out my-1 ${
                                isMenuOpen ? 'opacity-0' : 'bg-foreground dark:bg-white opacity-100'
                            }`}
                        />
                        <span
                            className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                                isMenuOpen ? 'bg-white -rotate-45 -translate-y-1.5' : 'bg-foreground dark:bg-white'
                            }`}
                        />
                    </button>
                </div>

                {/* Desktop Get Started Button */}
                <div className="hidden md:block">
                    <Link href="https://wa.me/919713101521?text=Hi" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="rounded-full px-4 py-2 bg-green-600 text-white hover:bg-green-500 dark:bg-green-600 dark:text-white dark:hover:bg-green-500 dark:hover:text-white">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>

        {/* Fullscreen Mobile Menu */}
        <div
            className={`fixed inset-0 z-55 w-screen h-screen bg-black overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
            <div className="flex flex-col items-center justify-center h-full w-full px-8">
                <ul className="space-y-8 text-center">
                    <li
                        className={`transform transition-all duration-500 ease-out ${
                            isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                        }`}
                        style={{ transitionDelay: isMenuOpen ? '100ms' : '0ms' }}
                    >
                        <Link
                            href="/"
                            className="block text-3xl font-bold text-white hover:text-green-500 transition-colors"
                            onClick={(e) => handleNavClick(e, '/')}
                        >
                            Home
                        </Link>
                    </li>
                    <li
                        className={`transform transition-all duration-500 ease-out ${
                            isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                        }`}
                        style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}
                    >
                        <Link
                            href="/#features"
                            className="block text-3xl font-bold text-white hover:text-green-500 transition-colors"
                            onClick={(e) => handleNavClick(e, 'features')}
                        >
                            Features
                        </Link>
                    </li>
                    <li
                        className={`transform transition-all duration-500 ease-out ${
                            isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                        }`}
                        style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}
                    >
                        <Link
                            href="/#about"
                            className="block text-3xl font-bold text-white hover:text-green-500 transition-colors"
                            onClick={(e) => handleNavClick(e, 'about')}
                        >
                            About
                        </Link>
                    </li>
                    <li
                        className={`transform transition-all duration-500 ease-out ${
                            isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                        }`}
                        style={{ transitionDelay: isMenuOpen ? '400ms' : '0ms' }}
                    >
                        <Link
                            href="/#pricing"
                            className="block text-3xl font-bold text-white hover:text-green-500 transition-colors"
                            onClick={(e) => handleNavClick(e, 'pricing')}
                        >
                            Pricing
                        </Link>
                    </li>
                    <li
                        className={`transform transition-all duration-500 ease-out ${
                            isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                        }`}
                        style={{ transitionDelay: isMenuOpen ? '500ms' : '0ms' }}
                    >
                        <Link
                            href="/#contact"
                            className="block text-3xl font-bold text-white hover:text-green-500 transition-colors"
                            onClick={(e) => handleNavClick(e, 'contact')}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Get Started Button */}
                <div
                    className={`mt-12 w-full max-w-xs transform transition-all duration-500 ease-out ${
                        isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                    }`}
                    style={{ transitionDelay: isMenuOpen ? '600ms' : '0ms' }}
                >
                    <Link href="https://wa.me/919713101521?text=Hi" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full rounded-full py-6 text-lg bg-green-600 text-white hover:bg-green-500">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </>
);
}
