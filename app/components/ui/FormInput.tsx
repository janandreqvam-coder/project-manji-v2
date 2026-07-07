type Props = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  defaultValue?: string;
};

export default function FormInput({
  label,
  name,
  placeholder,
  required = false,
  type = "text",
  defaultValue,
}: Props) {
  return (
    <div>
      <label className="mb-2 block font-bold">
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        className="w-full rounded-xl border border-red-600/20 bg-black p-4 outline-none transition focus:border-red-500"
      />
    </div>
  );
}