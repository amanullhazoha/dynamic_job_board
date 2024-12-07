import { Field, ErrorMessage } from "formik";

interface Field {
  errors: any;
  touched: any;
  name: string;
  value: string;
  label: string;
  required: boolean;
  placeholder: string;
  setFieldValue: (name: string, value: string) => void;
}

const TextareaField = ({
  name,
  label,
  value,
  errors,
  touched,
  placeholder,
  setFieldValue,
  required = true,
}: Field) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-base text-stone-800 dark:text-white font-medium"
      >
        {label} {required && <span className="text-[#F04438]">*</span>}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setFieldValue(name, e.target.value)}
        className={`border border-[#D1D5DB] bg-[#F9FAFB] rounded-lg w-full px-4 py-3 text-base text-slate-800 outline-none mt-2
                ${touched?.[name] && errors?.[name] ? "border-red-500" : ""}`}
      />

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-base mt-1"
      />
    </div>
  );
};

export default TextareaField;
