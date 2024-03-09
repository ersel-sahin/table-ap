import  getColumns from '/Users/xxx/Desktop/- Vault/HeliumGo/Workshop/React/table-app/table-appp/src/components/Table/data.jsx';

const Table = () => {
  return (
    <table className="w-100">
      <thead className="">
        <tr>
          {getColumns.map((column) => (
            <th key={column.id} className="p-sm">
              <span className="font-weight-bold color-primary">
                {column.title}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {getColumns.map((column) => (
          <tr key={column.id} className="border-b border-color-black-alpha-2">
            <td className="p-sm">{column.number}</td>
            <td className="p-sm">{column.firstName}</td>
            <td className="p-sm">{column.lastName}</td>
            <td className="p-sm">{column.phone}</td>
            <td className="p-sm">{column.town}</td>
            <td className="p-sm">{column.city}</td>
            <td className="p-sm">{column.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;