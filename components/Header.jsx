import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <h1 className="header-logo">
                🚀 Avinash AI Lab
            </h1>
            <div className="header-links">

                <Link href="/">
                    Home
                </Link>

                <Link href="/machine-learning">
                    Machine Learning
                </Link>

                <Link href="/deep-learning">
                    Deep Learning
                </Link>

                <Link href="/nlp">
                    NLP
                </Link>

                <Link href="/generative-ai">
                    Generative AI
                </Link>

                <Link href="/dsa">
                    DSA
                </Link>

                <Link href="/projects">
                    Projects
                </Link>

                <Link href="/portfolio">
                    Portfolio
                </Link>

            </div>

        </header>
    );
}