const SubmitButton = ({ title }: { title: string }) => {
  return (
    <button
      type="submit"
      className="w-full px-5 py-3 text-white transition-colors duration-300 bg-slate-800 dark:bg-green-500 hover:bg-green-500 rounded-md"
    >
      {title}
    </button>
  );
};

export default SubmitButton;
