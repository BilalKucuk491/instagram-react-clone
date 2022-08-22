import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="text-center grid gap-y-6 pt-5">
      <h6 className="font-semibold text-[22px] text-[#262626]">
        Sorry, this page isn't available.
      </h6>
      <p>
        The link you followed may be broken, or the page may have been removed.
        <Link className="text-link" to="/" >Go back to Instagram.</Link>
      </p>
    </div>
  );
}
