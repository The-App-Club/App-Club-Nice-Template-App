import Link from "next/link";
import Button from "../../../components/Button";

function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <Link href={`/pricing/checkout/purchase-confirm`}>
        <a>Go To Purchase Confirm</a>
      </Link>
      <Button></Button>
    </div>
  );
}

export default Checkout;
