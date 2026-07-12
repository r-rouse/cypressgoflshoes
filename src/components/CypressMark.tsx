export function CypressMark({
  className = "h-3 w-3",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 4C17 10.2 15.2 15.4 14.6 20.2C14 25.2 15.2 29.4 17.8 33.2C18.6 34.4 19.3 35.3 20 36C20.7 35.3 21.4 34.4 22.2 33.2C24.8 29.4 26 25.2 25.4 20.2C24.8 15.4 23 10.2 20 4Z"
        fill="currentColor"
      />
      <rect x="19.25" y="31.5" width="1.5" height="5" fill="currentColor" />
    </svg>
  );
}

export function CypressWordmark({
  className = "",
  mark = false,
}: {
  className?: string;
  mark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {mark ? <CypressMark className="h-3 w-3" /> : null}
      <span className="font-serif text-[1.35rem] tracking-[0.02em] text-charcoal">
        Cypress
      </span>
    </span>
  );
}
