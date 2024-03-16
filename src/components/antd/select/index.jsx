import { Select } from "antd";
export default function CustomSelect({ placeholder = "", className = "", data, ...rest }) {
  return (
    <Select
      showSearch
      allowClear
      className={`${className} w-full`}
      size="large"
      placeholder={placeholder}
      {...rest}
    >
      {
        data && data.map(({ id, name }) => {
          return <Select.Option key={id} value={name}>{name}</Select.Option>
        })
      }
    </Select>

  );
}
