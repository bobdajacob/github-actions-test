interface AdvertisementProps {
  companyName: string;
  productDescription: string;
  price: string;
};

function Advertisement(props: AdvertisementProps) {
  return (
    <div className="advertisement">
      <p>{props.companyName}</p>
      <p>{props.productDescription}</p>
      <p>{props.price}</p>
    </div>
  );
}
<div>
  <p>hello!</p>
</div>
<div>
  <p>hello!</p>
</div>








export default Advertisement;









