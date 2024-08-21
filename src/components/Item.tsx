export interface ItemProps {
  type: string;
  img?: string;
  title?: string;
  text: string;
  comment?: string;
}

/**
 * Базовый элемент
 *
 */

function Item({ type, img, title, text, comment }: ItemProps) {
  return (
    <div className={`item item-${type}`}>
      {img && <img className="item-img" src={img} alt={type} />}
      {title && <span className="item-title">{title}</span>}
      <span className="item-text">{text}</span>
      {comment && <span className="item-comment">{comment}</span>}
    </div>
  );
}

export default Item;
