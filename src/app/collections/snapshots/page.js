import Image from "next/image";
import Link from "@/app/components/Link";

import Vsco001Image from "./vsco_001.jpg";
import Vsco002Image from "./vsco_002.jpg";
import Vsco003Image from "./vsco_003.jpg";
import Vsco004Image from "./vsco_004.jpg";
import Vsco005Image from "./vsco_005.jpg";
import Vsco006Image from "./vsco_006.jpg";
import Vsco007Image from "./vsco_007.jpg";
import Vsco008Image from "./vsco_008.jpg";

const photos = [
    { src: Vsco003Image, alt: "heart eyes" },
    { src: Vsco002Image, alt: "india" },
    { src: Vsco005Image, alt: "fractured views" },
    { src: Vsco001Image, alt: "rust that holds gold" },
    { src: Vsco004Image, alt: "the lonely flight" },
    { src: Vsco006Image, alt: "centerpiece" },
    { src: Vsco007Image, alt: "nostalgic view" },
    { src: Vsco008Image, alt: "the smell of home" },
];

export default function PhotographyPage() {
    return (
        <section>
            <div className="mb-6">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    A collection of {" "}
                    <Link href="https://vsco.co/siddhiiipatelll/gallery/" className="font-medium">
                        moments
                    </Link>{" "}
                    that felt worth capturing.
                </p>
            </div>
            <div className="columns-2 gap-4 space-y-4">
				{photos.map((photo, index) => (
                    <div
						key={`${photo.alt}-${index}`}
                        className="group relative break-inside-avoid overflow-hidden"
					>
						<Image
							src={photo.src}
							alt={photo.alt}
                            className="h-auto w-full transition duration-200 group-hover:scale-105 group-hover:brightness-50 group-focus-within:scale-105 group-focus-within:brightness-50"
							sizes="50vw"
							priority={index < 4}
						/>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 px-3 py-2 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                            {photo.alt}
                        </div>
                    </div>
				))}
			</div>
        </section>
    );
}
