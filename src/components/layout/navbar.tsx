"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        
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

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/70 dark:bg-background/70 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="text-xl font-bold tracking-normal text-foreground dark:text-white">
                    THE GREEN CANDLE
                </Link>
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
                <Link href="https://wa.me/919713101521?text=Hi" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="rounded-full px-4 py-2 bg-green-600 text-white hover:bg-green-500 dark:bg-green-600 dark:text-white dark:hover:bg-green-500 dark:hover:text-white">
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    );
}
