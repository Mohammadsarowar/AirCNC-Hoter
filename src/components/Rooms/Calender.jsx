import { DateRange } from 'react-date-range'



const Calender = ({value,handelSelect}) => {
  return (
    <DateRange
      rangeColors={['#F43F5E']}
      ranges={[value]}
      onChange={handelSelect}
      date={new Date()}
      direction='vertical'
      showDateDisplay={false}
      minDate={new Date()}
    />
  )
}

export default Calender;
