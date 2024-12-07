interface checkbox {
  name?: string;
  label?: string;
  value?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ label, value, name, onChange }: checkbox) => {
  return (
    <div>
      <label
        className="text-sm text-slate-800 dark:text-white font-medium flex items-center"
        htmlFor={name}
      >
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={value}
          onChange={onChange}
          className="mr-2.5 w-3.5 h-3.5 accent-slate-900 dark:accent-white"
        />

        {label}
      </label>
    </div>
  );
};

export default Checkbox;
