import Link from "@/app/components/Link";

export default function WhatILikeToReadPage() {
    return (
        <section>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                A curated collection of books, articles, and resources that have inspired me and shaped my thinking.
            </p>
            <div className="mt-4">
                <ul className="list-disc list-inside space-y-2 text-smtext-stone-600 dark:text-stone-400">
                    <li className="text-neutral-600 dark:text-neutral-400">
                        <Link href="https://sammatla.com/luck-surface-area/" target="_blank" rel="noopener noreferrer">
                            How to Increase Your Luck Surface Area (Ultimate Guide)
                        </Link>{" "}
                        {/* by Sam Matla */}
                    </li>
                </ul>
            </div>
        </section>
    );
}