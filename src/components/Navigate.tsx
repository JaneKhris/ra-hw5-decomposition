import Item from "./Item";

interface NavigateProps {
  type:'upside'|'rates'|'main'
  array?:string[],
  children?: React.ReactNode
}

/**
 * Навигационный блок
 * 
 */

function Navigate({type, array, children }:NavigateProps) {
  return (
    <div className={`navi navi-${type}`}>
      {array && array.map((nav) => (
        <Item
          type='navi'
          text={nav}/>
      ))}
      {children}
    </div>
  );
}

export default Navigate;
