import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
export default function DateRangePicker(rest) {

  return (
    <RangePicker size="large" {...rest} placeholder={["Start Date", "End Date"]} className='w-full' />
  )
}
