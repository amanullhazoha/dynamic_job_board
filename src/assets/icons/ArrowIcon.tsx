const ArrowIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="24"
      viewBox="0 0 12 24"
      className={`text-slate-800 dark:text-white ${className}`}
    >
      <defs>
        <path
          id="weuiArrowOutlined0"
          fill="currentColor"
          d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
        />
      </defs>
      <use href="#weuiArrowOutlined0" transform="rotate(-180 5.02 9.505)" />
    </svg>
  );
};

export default ArrowIcon;
