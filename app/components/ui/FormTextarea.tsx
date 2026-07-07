type Props = {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  defaultValue?: string;
};

export default function FormTextarea({
  label,
  name,
  placeholder,
  rows = 5,
  defaultValue,
}: Props) {
  return (
    <div>
      <label className="mb-2 block font-bold">
        {label}
      </label>

      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full rounded-xl border border-red-600/20 bg-black p-4 outline-none transition focus:border-red-500"
      />
    </div>
  );
}