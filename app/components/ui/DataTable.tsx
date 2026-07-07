type Column = {
  key: string;
  label: string;
};

type Props<T extends { id: number } & Record<string, unknown>> = {
  columns: Column[];
  data: T[];
  renderActions?: (row: T) => React.ReactNode;
};

export default function DataTable<T extends { id: number } & Record<string, unknown>>({
  columns,
  data,
  renderActions,
}: Props<T>) {
  return (
    <div className="overflow-hidden rounded-3xl border border-red-600/20 bg-zinc-900">

      <table className="w-full">

        <thead className="border-b border-red-600/20">

          <tr>

            {columns.map((column) => (
              <th
                key={column.key}
                className="p-5 text-left font-bold"
              >
                {column.label}
              </th>
            ))}

            {renderActions && (
              <th className="p-5 text-right">
                Actions
              </th>
            )}

          </tr>

        </thead>

        <tbody>

          {data.map((row) => (

            <tr
              key={row.id}
              className="border-b border-red-600/10 hover:bg-zinc-800/50"
            >

              {columns.map((column) => (
                <td
                  key={column.key}
                  className="p-5"
                >
                  {String(row[column.key] ?? "")}
                </td>
              ))}

              {renderActions && (
                <td className="p-5 text-right">
                  {renderActions(row)}
                </td>
              )}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
