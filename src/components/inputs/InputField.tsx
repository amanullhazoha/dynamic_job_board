import { Field, ErrorMessage } from "formik";

interface Field {
  errors: any;
  touched: any;
  name: string;
  type: string;
  label: string;
  required: boolean;
  placeholder: string;
}

const InputField = ({
  name,
  label,
  errors,
  touched,
  placeholder,
  type = "text",
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

      <Field
        id={name}
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder}
        error={touched?.[name] && errors?.[name]}
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

export default InputField;
