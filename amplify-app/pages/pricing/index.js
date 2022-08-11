import Link from "next/link";
import Button from "../../components/Button";

function Pricing() {
  return (
    <div>
      <h1>Pricing</h1>
      <Link href={`/pricing/checkout/`}>
        <a>Go To Checkout</a>
      </Link>
      <Button></Button>
    </div>
  );
}

export default Pricing;
