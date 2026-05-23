import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="text-6xl mb-4">🌸</span>
      <h1 className="font-serif text-4xl font-semibold text-henna-900 dark:text-henna-100 mb-3">
        Page Not Found
      </h1>
      <p className="text-henna-600 dark:text-henna-400 mb-8 max-w-sm">
        The page you are looking for does not exist. Browse our mehndi designs instead!
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/" className="btn-primary">Go to Homepage</Link>
        <Link href="/categories" className="btn-outline">Browse Categories</Link>
      </div>
    </div>
  );
}
