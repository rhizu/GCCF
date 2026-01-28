import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/news">News</Link>
      <Link href="/events">Events</Link>
      <Link href="/admin/login">Admin</Link>
    </nav>
  );
}
