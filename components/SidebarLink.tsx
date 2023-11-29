import Link from "next/link";
import classnames from "classnames";

type LinkColors =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "fuchsia"
  | "pink"
  | "gray";

interface SidebarLinkProps {
  path: string;
  text: string;
  icon?: React.ReactNode;
  count?: string;
  color?: LinkColors;
}

/**
 * Listing colors and bg colors so tailwind can generate the classes.
 * This trick prevents us writing a function or switch cases to generate
 * the classes.
 */

// text-red-500 - hover:bg-red-100
// text-orange-500 - hover:bg-orange-100
// text-yellow-500 - hover:bg-yellow-100
// text-green-500 - hover:bg-green-100
// text-blue-500 - hover:bg-blue-100
// text-fuchsia-500 - hover:bg-fuchsia-100
// text-pink-500 - hover:bg-pink-100
// text-gray-500 - hover:bg-gray-200

export default function SidebarLink(props: SidebarLinkProps) {
  const { color = "gray" } = props;
  const colorStrength = color === "gray" ? 200 : 100;

  const linkClassNames = classnames(
    "w-11/12 flex items-center pl-6 pr-3 py-3",
    "mb-2 mx-auto rounded-md text-gray-800",
    `hover:bg-${color}-${colorStrength}`
  );

  const iconClassNames = classnames("mr-2", `text-${color}-500`);

  return (
    <Link href={props.path} className={linkClassNames}>
      {props.icon ? <div className={iconClassNames}>{props.icon}</div> : null}

      <span>{props.text}</span>

      {props.count ? (
        <span className="ml-auto text-xs">{props.count}</span>
      ) : null}
    </Link>
  );
}
