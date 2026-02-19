export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-200 py-8 mt-12" role="contentinfo">
      <div className="max-w-resume mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-surface-400">
          <p>
            © {currentYear} AARYAN NERKAR. All rights reserved.
          </p>
          <p>
            Last updated: February 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
