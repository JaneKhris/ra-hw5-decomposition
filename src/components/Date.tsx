import Item from "./Item";

interface DateProps {
  date: string;
}

/**
 * Дата 
 * 
 */

function Date({ date }: DateProps) {
  return <Item type="date" text={date} />;
}

export default Date;
