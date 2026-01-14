import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="col-span-2">
                        <Link href="/" className="text-xl font-bold tracking-normal text-foreground">
                            THE GREEN CANDLE
                        </Link>
                        <p className="mt-4 max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
                            Empowering traders with real-time insights and advanced analytics for the modern market.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Product</h3>
                        <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                            <li><Link href="#features">Features</Link></li>
                            <li><Link href="#">Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
                    © {new Date().getFullYear()} The Green Candle. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
