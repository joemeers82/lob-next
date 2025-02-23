export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full max-w-4xl p-4 mx-auto">
      <div className="flex items-center gap-4">
        <a href="/" className="text-xl font-bold">
          Next.js
        </a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>
    </nav>
  );
}
