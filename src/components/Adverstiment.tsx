interface AdverstimentProps {
    type: string;
    img: string;
    title?: string,
    text?: string
}
/**
 * Рекламный блок
 * 
 */
function Adverstiment({ type, img, title, text }: AdverstimentProps) {
  return (
    <div
    className={`adv adv-${type}`}>
        <img src={img} alt={type}/>
        {title && <h4>{title}</h4>}
        {text && <div>{text}</div>}
        </div>
  )
}
export default Adverstiment