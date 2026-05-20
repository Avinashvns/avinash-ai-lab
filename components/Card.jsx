import Link from "next/link";

export default function Card({ title, description, href }) {

  return (

    <Link href={href} className="card">

      <h2>{title}</h2>

      <p>{description}</p>

    </Link>
  )
}