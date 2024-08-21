export interface SectionProps {
  type: string;
  title?: string;
  img?: string;
  children?: React.ReactNode;
}

/**
 * Раздел
 * 
 */

function Section({ type, title, img, children }: SectionProps) {
  return (
    <>
      <div className={`${type}-container`}>
        {title && <h4 className="section-title">{title}</h4>}
        {img && <img src={img}/>}
        {children}
      </div>
    </>
  );
}

export default Section;
