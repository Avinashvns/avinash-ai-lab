// import Link from "next/link";

// export default function Header() {
//     return (
//         <header className="header">
//             <h1 className="header-logo">
//                 🚀 Avinash AI Lab
//             </h1>
//             <div className="header-links">

//                 <Link href="/">
//                     Home
//                 </Link>

//                 <Link href="/machine-learning">
//                     Machine Learning
//                 </Link>

//                 <Link href="/deep-learning">
//                     Deep Learning
//                 </Link>

//                 <Link href="/nlp">
//                     NLP
//                 </Link>

//                 <Link href="/generative-ai">
//                     Generative AI
//                 </Link>

//                 <Link href="/dsa">
//                     DSA
//                 </Link>

//                 <Link href="/projects">
//                     Projects
//                 </Link>

//                 <Link href="/portfolio">
//                     Portfolio
//                 </Link>

//             </div>

//         </header>
//     );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname();

    return (

        <header className="header">

            {/* ================================================= */}
            {/* LOGO */}
            {/* ================================================= */}

            <Link href="/" className="logo">

                🚀 Avinash AI Lab

            </Link>

            {/* ================================================= */}
            {/* NAVIGATION */}
            {/* ================================================= */}

            <nav className="nav-links">

                <Link
                    href="/"
                    className={
                        pathname === "/"
                            ? "nav-active"
                            : ""
                    }
                >
                    Home
                </Link>

                <Link
                    href="/machine-learning"
                    className={
                        pathname.startsWith("/machine-learning")
                            ? "nav-active"
                            : ""
                    }
                >
                    Machine Learning
                </Link>

                <Link
                    href="/deep-learning"
                    className={
                        pathname.startsWith("/deep-learning")
                            ? "nav-active"
                            : ""
                    }
                >
                    Deep Learning
                </Link>

                <Link
                    href="/nlp"
                    className={
                        pathname.startsWith("/nlp")
                            ? "nav-active"
                            : ""
                    }
                >
                    NLP
                </Link>

                <Link
                    href="/generative-ai"
                    className={
                        pathname.startsWith("/generative-ai")
                            ? "nav-active"
                            : ""
                    }
                >
                    Generative AI
                </Link>

                <Link
                    href="/dsa"
                    className={
                        pathname.startsWith("/dsa")
                            ? "nav-active"
                            : ""
                    }
                >
                    DSA
                </Link>

                <Link
                    href="/projects"
                    className={
                        pathname.startsWith("/projects")
                            ? "nav-active"
                            : ""
                    }
                >
                    Projects
                </Link>

                <Link
                    href="/portfolio"
                    className={
                        pathname.startsWith("/portfolio")
                            ? "nav-active"
                            : ""
                    }
                >
                    Portfolio
                </Link>

            </nav>


        </header>
    );
}