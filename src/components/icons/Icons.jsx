import { Link } from "react-router-dom";

export default function Icons({to, nameIcon}) {
  return (
    <Link to={to}>
      <span>
        <FcGoogle className=" w-12 h-12" />
      </span>
    </Link>
  );
}
