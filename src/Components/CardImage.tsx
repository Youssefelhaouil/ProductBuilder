interface IProps {
  url:string,
  alt:string,
  classname:string
}

function CardImage({url,alt,classname}: IProps) {
  return (
    <>
    
    <img src={url} alt={alt} className={classname} /></>
  );
}

export default CardImage;
